from django.db import models

class Pet(models.Model):
  owner = models.ForeignKey('users.User', on_delete=models.CASCADE, null=True)
  profile_img = models.ImageField(upload_to="pets", null=True, blank=True)
  name = models.CharField(max_length=255)
  breed = models.CharField(max_length=255)
  category = models.CharField(max_length=255)
  birth_year = models.IntegerField(null=True, blank=True)
  interests = models.TextField(null=True, blank=True)
  precautions = models.TextField(null=True, blank=True)
  gender = models.CharField(max_length=100)
  open_to_adopt = models.BooleanField(default=False)

  def __str__(self):
    return self.name

class PetAdopt(models.Model):
  pet = models.ForeignKey(Pet, on_delete=models.CASCADE)
  adopter = models.ForeignKey('users.User', on_delete=models.CASCADE, null=True, blank=True)
  start_date = models.DateField()
  end_date = models.DateField()
  is_adopted = models.BooleanField(default=False)
  owner_message = models.TextField(null=True, blank=True)
  amount = models.IntegerField()

  def __str__(self):
    return f"{self.pet.name} - {self.adopter.username}"
