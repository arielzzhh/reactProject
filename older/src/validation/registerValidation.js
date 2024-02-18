import Joi from "joi";


const firstSchema = Joi.object({
  first: Joi.string().min(2).max(256).required(),

});
const lastSchema = Joi.object({
  last: Joi.string().min(2).max(256).required(),
});

const altSchema = Joi.object({
  alt: Joi.string().min(2).max(256)
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
  houseNumber: Joi.number().min(2).max(256).required(),
});


const zipSchema = Joi.object({
  zip: Joi.number().min(2).max(99999999).required(),
});

const emailSchema = Joi.object({
  email: Joi.string().min(2).max(256) .required(),
});

const urlSchema = Joi.object({
  url: Joi.string().min(2).max(256)
});

const passwordSchema = Joi.object({
  password: Joi.string()
    .pattern(new RegExp('^(?=.*[A-Z])(?=.*[a-z])(?=.*\\d)(?=.*[!@#$%^&*()-])[A-Za-z\\d!@#$%^&*()-]{9,}$'))
    .min(9)
    .max(20)
    .required(),
});

const phoneSchema = Joi.object({
  phone: Joi.string()
    .min(2)
    .max(11)
    .required(),
});


const imageSchema = Joi.object({
  image: Joi.string().min(7).max(20).required(),
});







const validateFirstSchema = (first) => firstSchema.validate(first);
const validateLastSchema = (last) => lastSchema.validate(last);
const validateemailSchema = (email) => emailSchema.validate(email);
const validapasswordScheme = (password) => passwordSchema.validate(password);
const validatephoneSchema = (phone) => phoneSchema.validate(phone);
const validateurlSchema = (url) => urlSchema.validate(url);
const validatealtSchema = (alt) => altSchema.validate(alt);
const validatestateSchema = (state) => stateSchema.validate(state);
const validacountrySchema = (country) => countrySchema.validate(country);
const validacitySchema = (city) => citySchema.validate(city);
const validatestreetSchema = (street) => streetSchema.validate(street);
const validatehouseNumberSchema = (houseNumber) => houseNumberSchema.validate(houseNumber);
const validatezipSchema = (zip) => zipSchema.validate(zip);
const validatimageSchema=(image)=> imageSchema.validate(image);





const validateSchema = {
  first: validateFirstSchema,
  last:validateLastSchema,
  email: validateemailSchema,
  password: validapasswordScheme,
  phone: validatephoneSchema,
  url:validateurlSchema,
  alt: validatealtSchema,
  state: validatestateSchema,
  country:validacountrySchema,
  city: validacitySchema,
  street:validatestreetSchema,
  houseNumber: validatehouseNumberSchema,
  zip:validatezipSchema,
  image:validatimageSchema

};

export {
 
  validateSchema,
};
