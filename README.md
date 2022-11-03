
<p align="center">
  <img src="https://avatars2.githubusercontent.com/u/11311339?s=460&v=4" width="200"/>
</p>
<h1 align="center">Paazl for Hyva React Checkout</h2>


## About Paazl

Paazl is a carrier management and delivery experience platform for global e-commerce.  Our mission is to help brands and retailers offer the best delivery everywhere.

Our extensions enable a seamless and intuitive display of delivery options in the check-out of your webshop. They support a wide range of home delivery options, carrier collection points and click & collect via your local stores. The extensions also provides timeframe availability, nominated day selection and ETA mechanisms. Powerful algorithms calculate the right delivery for every customer.

Our warehousing solutions take care of the shipping labels, carrier manifesting, electronic customs documentation and personalized track & trace notifications. Your customer service team can tap directly into our systems for real time monitoring.

In a nutshell, Paazl provides the tools to scale e-commerce delivery globally. Our carrier management and delivery experience platform increases carrier flexibility, go-to-market speed and customer loyalty, lowering shipping costs as well as driving long-term revenue

## Installation

Make sure you have the [Hyva React Checkout](https://github.com/hyva-themes/magento2-react-checkout) version 1.1.2 or higher installed. Open the `package.json` of your checkout and change:

```diff
"config": {
  "shippingMethodsRepo": "Add your shipping methods here",
  "paymentMethodsRepo": "Add your payment methods here"
},
```

To: 

```diff
"config": {
  "shippingMethodsRepo": {
    "paazl": "git@github.com:Paazl/magento2-hyva-react-checkout.git"
  },
  "paymentMethodsRepo": "Add your payment methods here"
},
```

After that, run `npm install` to generate the renderers.
