# MARADMIN WEB CRAWLER IOT PROVIDE A BETTER SEARCH FUNCTION
Below are the documentations on how to set it up from scratch. Then further below will be how to just clone it and run it.
The website is `https://www.marines.mil/News/Messages/MARADMINS/`

## Methodology of building the application
1. Scrapy
1. Django API backend
1. Celery Worker to automate the scraping and inserting new maradmin into the db
1. React frontend

## VIRTUAL ENV
1. UTILIZE BASH in windows or natively in Unix machines
1. `python -m venv mybash`
1. Activate the virutal environment in bash.
    1. In windows utilizing bash `source mybash/bin/activate`
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
5. Create a bulk insert manager and run it with a django command
6. `python manage.py maradmin_uploader`

### Django Rest Framework
1. `pip install djangorestframework`
2. `pip install django-filter`
3. `pip install markdown`
4. Add rest_framework to settings
5. Create serializer.py
6. Create view to display serialized objects
7. Update URL to view with simple Router

### Integrated Scrapy into Django
1. `pip install scrapy-djangoitem`
1. Moved `maradmin_scrapy_project` into same level as `search_api`
1. Update `management/commands/maradmin_uploader.py`
1. Update `maradmin_scrapy_project` files from adding `apps.py`, to the items, pipelines, and settings to integrate Django models
1. Run `scrapy crawl maradminspider` inside the `maradmin_scrapy_project` to scrape and save into django database

### Celery Worker - IW
1. This is to automate the scraping and uploading into the database to ensure it is up-to-date
2. `pip install celery` for the worker and `pip install redis` for the broker
3. Create celery.py inside the backend/backend
4. Add celery settings at the bottom of settings
5. Add celery to `backend/backend/__init__.py` to ensure it is loaded every time django starts up
6. Create `tasks.py` and make simple task inside directory `search_api`
7. Install redis-server
    1. `sudo apt-get install redis-server`
    1. `sudo service redis-server restart`
1. Run redis server on separate terminal
    1. `redis-server`
1. Run celery worker on separate terminal
    1. `celery worker -A backend --loglevel=info`
1. Run Django Python shell and test out `adding_task`
    1. `python manage.py shell`
    1. `from search_api.tasks import adding_task`
    1. `task = adding_task.delay(2,5)`
    1. `print(f"id={task.id}, state={task.state}, status={task.status}")`
    1. `task.get()`


## References
1. [Scrapy](https://docs.scrapy.org/en/latest/index.html "Scrapy Documentation")
1. [Django Girls](https://tutorial.djangogirls.org/en "Django Girls Tutorial")
2. [Django Rest Framework](https://www.django-rest-framework.org/ "DRF Documentation")
1. [Scraping with Scrapy and Django Integration](https://blog.theodo.com/2019/01/data-scraping-scrapy-django-integration/ 'Scrapy with Django')