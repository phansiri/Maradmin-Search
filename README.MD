# MARADMIN WEB CRAWLER IOT PROVIDE A BETTER SEARCH FUNCTION
Below are the documentations on how to set it up from scratch. Then further below will be how to just clone it and run it.
The website is `https://www.marines.mil/News/Messages/MARADMINS/`

## Method
1. Scrapy
1. Django API backend
1. Celery Worker to automate the scraping and inserting new maradmin into the db
1. React frontend

## VIRTUAL ENV
`python -m venv myvenv`
then activate the virutal environment. In windows utilizing bash `source myvenv/Scripts/activate`
`python -m pip install --upgrade pip`
`pip install Scrapy`

## SCRAPY
1. Create a new project `scrapy startproject maradmin_scrapy_project`
1. Add csv into the settings
1. Create a spider under spiders folder called maradminspider
  1. Trial 1: it scraps just the basic information and not the body - initial scrape is 50 pages
1. Crawl utilizing the command `scrapy crawl maradminspider` inside the root director of `maradmin_scrapy_project`
1. The csv will be placed in the destination whereever you designated in the settings of `maradmin_scrapy_project`