# MARADMIN WEB CRAWLER IOT PROVIDE A BETTER SEARCH FUNCTION
Below are the documentations on how to set it up from scratch. Then further below will be how to just clone it and run it.
The website is `https://www.marines.mil/News/Messages/MARADMINS/`

## Methodology of building the application
1. Scrapy
1. Django API backend
1. Celery Worker to automate the scraping and inserting new maradmin into the db
1. React frontend

## VIRTUAL ENV
1. `python -m venv myvenv`
1. Activate the virutal environment. In windows utilizing bash `source myvenv/Scripts/activate`
1. `python -m pip install --upgrade pip`
### These are the packages installed. They will all role up into a requirements.txt later
1. `pip install Scrapy`

## SCRAPY
1. Create a new project `scrapy startproject maradmin_scrapy_project`
1. Add csv into the settings
1. Create a spider under spiders folder called maradminspider
  1. Trial 1: it scraps just the basic information and not the body - initial scrape is 50 pages
1. Crawl utilizing the command `scrapy crawl maradminspider` inside the root director of `maradmin_scrapy_project`
1. The csv will be placed in the destination whereever you designated in the settings of `maradmin_scrapy_project`

## DJANGO
1. `pip install django`
1. `django-admin.exe startproject backend`
1. Make updates to the settings.py
1. `python manage.py migrate`
1. `python manage.py runserver` - to test if it runs
1. `python manage.py startapp search_api`
1. Add search_api into settings to installed apps
1. Create the models based on the scraped data
2. `python manage.py makemigrations search_api`
2. `python manage.py migrate search_api`
3. Set up admin to for testing purpose only
   1. `python manage.py createsuperuser`
4. Set up URL links from project to app
5. 
### Django Rest Framework
1. `pip install djangorestframework`
2. `pip install django-filter`
3. `pip install markdown`
4. Add rest_framework to settings
5. Create serializer.py
6. Create view to display serialized objects
7. Update URL to view with simple Router



## References
1. [Scrapy](https://docs.scrapy.org/en/latest/index.html "Scrapy Documentation")
1. [Django Girls](https://tutorial.djangogirls.org/en "Django Girls Tutorial")
2. [Django Rest Framework](https://www.django-rest-framework.org/ "DRF Documentation")