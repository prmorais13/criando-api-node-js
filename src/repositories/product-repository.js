'use strict'

const mongoose = require('mongoose');
const Product = mongoose.model('Product');

exports.get = async() => {
  const res = await Product
    .find({
      active: true
    }, 'title price slug');
  return res;
}

exports.getBySlug = async(slugParam) => {
  const res = await Product
    .findOne({
      slug: slugParam,
      active: true 
    }, 'title description price slug tags');
  return res;
}

exports.getById = async(idParam) => {
  const res = await Product
    .findById(idParam, 'title description price slug tags');
    return res;
}

exports.getByTag = async(tagParam) => {
  const res = await Product
    .find({
      tags: tagParam,
      active: true
    }, 'title description price slug tags');
    return res;
}

exports.create = async(data) => {
  let product = new Product(data);
  await product.save();
  return data;
}

exports.update = async(idParam, data) => {
  await Product
    .findByIdAndUpdate(idParam, {
      $set: {
        title: data.title,
        slug: data.slug,
        description: data.description,
        price: data.price
      }
    });
  return data;
}

exports.del = async(idParam) => {
  await Product
    .findByIdAndRemove(idParam);
}