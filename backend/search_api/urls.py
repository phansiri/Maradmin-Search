from rest_framework.routers import SimpleRouter
from . import views

router = SimpleRouter()
router.register("", views.MaradminViewSet, "maradmin_list")

urlpatterns = router.urls
