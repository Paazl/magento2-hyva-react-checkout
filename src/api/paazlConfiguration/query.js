export const PAAZL_CONFIGURATION_QUERY = `
query paazlConfiguration($cartId: String!) {
  paazlConfiguration(cart_id: $cartId) {
    mountElementId
    apiKey
    token
    loadPaazlBasedData
    loadCarrierBasedData
    availableTabs
    headerTabType
    defaultTab
    style
    nominatedDateEnabled
    consigneeCountryCode
    consigneePostalCode
    numberOfProcessingDays
    deliveryDateOptions {
      startDate
      numberOfDays
    }
    currency
    deliveryOptionDateFormat
    deliveryEstimateDateFormat
    pickupOptionDateFormat
    pickupEstimateDateFormat
    sortingModel {
      orderBy
      sortOrder
    }
    shipmentParameters {
      totalWeight
      totalPrice
      numberOfGoods
      goods {
        price
        quantity
        weight
      }
    }
    shippingOptionsLimit
    pickupLocationsPageLimit
    pickupLocationsLimit
    initialPickupLocations
    language
  }
}
`;
