from rest_framework.routers import SimpleRouter
from . import views

router = SimpleRouter()
router.register("api", views.MaradminViewSet, "maradmin")

urlpatterns = router.urls
