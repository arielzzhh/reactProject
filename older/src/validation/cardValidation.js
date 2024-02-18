import Joi from "joi";

const titleSchema = Joi.object({
  title: Joi.string().min(2).max(256).required(),
});
const subTitleSchema = Joi.object({
  subTitle: Joi.string().min(2).max(256).required(),
});


const DescriptionSchema = Joi.object({
  Description: Joi.string().min(2).max(256).required(),
});

const phoneSchema = Joi.object({
  phone: Joi.string().min(2).max(256).required(),
});
const emailSchema = Joi.object({
  email: Joi.string().min(2).max(256).required(),
});



const webSchema = Joi.object({
  web: Joi.string().min(2).max(256).required(),
});
const urlSchema = Joi.object({
  url: Joi.string().min(2).max(256).required(),
});

const altSchema = Joi.object({
  alt: Joi.string().min(2).max(256).required(),
});
const stateSchema = Joi.object({
  state: Joi.string().min(2).max(256).required(),
});
const countrySchema = Joi.object({
  country: Joi.string().min(2).max(256).required(),
});
const citySchema = Joi.object({
  city: Joi.string().min(2).max(256).required(),
});
const streetSchema = Joi.object({
  street: Joi.string().min(2).max(256).required(),
});

const houseNumberSchema = Joi.object({
  houseNumber: Joi.string().min(2).max(256).required(),
});
const zipSchema = Joi.object({
  zip: Joi.string().min(2).max(256).required(),
});



const validateTitleSchema = (title) => titleSchema.validate(title);
const validateSubTitleSchema = (subTitle) => subTitleSchema.validate(subTitle);
const validatDescriptionSchema = (Description) => DescriptionSchema.validate(Description);
const validatphoneSchema = (phone) => phoneSchema.validate(phone);
const validaemailSchema = (email) => emailSchema.validate(email);
const validawebSchema = (web) => webSchema.validate(web);
const validaturlSchema = (url) => urlSchema.validate(url);
const validaaltSchema = (alt) => altSchema.validate(alt);
const validastateSchema = (state) => stateSchema.validate(state);
const validatcountrySchema = (country) => countrySchema.validate(country);
const validacitySchema = (city) => citySchema.validate(city);
const validatestreetSchema = (street) => streetSchema.validate(street);
const validathouseNumberSchema = (houseNumber) => houseNumberSchema.validate(houseNumber);
const validazipSchema = (zip) => zipSchema.validate(zip);







const validateCardSchema = {
  title: validateTitleSchema,
  subTitle: validateSubTitleSchema,
  Description:validatDescriptionSchema,
  phone:validatphoneSchema,
  email:validaemailSchema,
  web:validawebSchema,
  url:validaturlSchema,
  alt:validaaltSchema,
  state:validastateSchema,
  country:validatcountrySchema,
  city:validacitySchema,
  street:validatestreetSchema,
  houseNumber:validathouseNumberSchema,
  zip:validazipSchema,
};

export default validateCardSchema;
