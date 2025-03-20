import requests
from bs4 import BeautifulSoup
import json

# Function to scrape job listings
def scrape_jobs():
    url = "https://www.indeed.com/jobs?q=software+developer&l=Remote"
    response = requests.get(url)
    soup = BeautifulSoup(response.text, 'html.parser')

    jobs = []
    for job_card in soup.find_all('div', class_='job_seen_beacon'):
        title = job_card.find('h2', class_='jobTitle').get_text(strip=True)
        company = job_card.find('span', class_='companyName').get_text(strip=True)
        link = "https://www.indeed.com" + job_card.find('a')['href']

        jobs.append({
            'title': title,
            'company': company,
            'link': link
        })

    # Save to JSON file
    with open('../jobs.json', 'w') as file:
        json.dump(jobs, file, indent=4)

    print("Jobs scraped successfully and saved to jobs.json")

if __name__ == "__main__":
    scrape_jobs()
