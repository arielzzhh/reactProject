import Joi from "joi"


const titleSchema = Joi.object({
  title: Joi.string().min(2).max(256).required(),
  
  });
  const subtitleSchema = Joi.object({
    subtitle: Joi.string().min(2).max(256).required(),
  });
  
  const descriptionSchema = Joi.object({
    description: Joi.string().min(2).max(1024).required(),
  });
  
  
  const phoneSchema = Joi.object({
    phone: Joi.string().min(9).max(11).required(),
  });
  
  const emailSchema = Joi.object({
    email: Joi.string().min(5).required(),
  });
  
  
  const webSchema = Joi.object({
    web: Joi.string().min(14).required(),
  });
  
  
  const urlSchema = Joi.object({
    url: Joi.string().min(14).required(),
  });
  
  
  const altSchema = Joi.object({
    alt: Joi.string().min(2).max(256).required(),
  });
  
  
  const stateSchema = Joi.object({
    state: Joi.string().min(2).max(256),
  });
  




  
  const countrySchema = Joi.object({
    country: Joi.string().min(2).required(),
  });
  
  
  const citySchema = Joi.object({
    city: Joi.string().min(2).max(256).required(),
  });
  
  
  const streetSchema = Joi.object({
    street: Joi.string().min(2).max(256).required(),
  });
  
  
  const houseNumberSchema = Joi.object({
    houseNumber: Joi.number().min(1).required(),
  });
  
  const zipSchema = Joi.object({
    zip: Joi.number(),
  });
  
  


  const validtetitleSchema = (title) => titleSchema.validate(title);
  const validtesubtitleSchema = (subtitle) => subtitleSchema.validate(subtitle);
  const validtdescriptionSchema = (description) => descriptionSchema.validate(description);
  const validtephoneSchema = (phone) => phoneSchema.validate(phone);
  const validteemailSchema = (email) => emailSchema.validate(email);
  const validtewebSchema = (web) => webSchema.validate(web);
  const validteurlSchema = (url) => urlSchema.validate(url);
  const validtealtSchema = (alt) => altSchema.validate(alt);
  const validtestateSchema = (state) => stateSchema.validate(state);
  const validtecountrySchema = (country) => countrySchema.validate(country);
  const validtecitySchema = (city) => citySchema.validate(city);
  const validtestreetSchema = (street) => streetSchema.validate(street);
  const validtehouseNumberSchema = (houseNumber) => houseNumberSchema.validate(houseNumber);
  const validtezipSchema=(zip)=> zipSchema.validate(zip);
 
  
  


  
const validateCreateCardSchema = {
  title: validtetitleSchema,
  subtitle:validtesubtitleSchema,
  description: validtdescriptionSchema,
  phone: validtephoneSchema,
  email: validteemailSchema,
  web:validtewebSchema,
  url: validteurlSchema,
  alt: validtealtSchema,
  state:validtestateSchema,
  country: validtecountrySchema,
  city:validtecitySchema,
  street: validtestreetSchema,
  houseNumber:validtehouseNumberSchema,
  zip:validtezipSchema

};

export default  validateCreateCardSchema
