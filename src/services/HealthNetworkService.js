import axios from 'axios'

const apiClient = axios.create({
  baseURL: 'https://www.brokerbox.net/vpapi',
  headers: {
    get: {
      Accept: 'application/json',
    },
    post: {
      Accept: '*/*',
    },
  },
})

const leadSource = '4c8e85ee-3c74-403c-a6e9-1ef12ea4a9e2'
const stmCampaign = 'vphealth_ng'
const healthCampaign = 'vphealth_hcmp'

function onError(data) {
  console.error(data)
  const message = data.message ? data.message : 'Invalid request'
  console.error(data.status + ': ' + message)
}

export default {
  async checkAccess() {
    let params = {
      url: document.location.href,
      leadSourceKey: leadSource,
    }
    params = Object.keys(params)
      .map(function (key) {
        return key + '=' + params[key]
      })
      .join('&')

    apiClient
      .get('/CheckAccess', params)
      .then((res) => console.log(res))
      .catch((error) => {
        console.log(error)
      })
  },
  async postLandingForm(formData) {
    const body = {
      pageUri: document.location.href,
      leadSourceKey: leadSource,
      campaign: formData.insuranceType === 'Short Term Medical' ? stmCampaign : healthCampaign,
      nextPage: document.location.href + '/#/health-insurance',
      firstName: formData.firstName,
      lastName: formData.lastName,
      zipCode: formData.zipCode,
      phoneNumber: formData.phoneNumber,
    }

    await apiClient
      .post('/SubmitLandingPage', body)
      .then((response) => {
        console.log(response.data)
        if (response.data.nextPage) {
          return response.data.nextPage
        }
        // successful request, but error
        onError(response)
      })
      .catch((error) => {
        onError(error)
      })
  },
  async postQuoteRequestForm(formData) {
    const body = {
      pageUri: document.location.href,
      birthdate: formData.birthdate,
      campaign: formData.insuranceType === 'Short Term Medical' ? stmCampaign : healthCampaign,
      gender: formData.gender,
      emailAddress: formData.email,
      county: formData.county,
    }

    await apiClient
      .post('/SubmitQuoteRequest', body)
      .then((response) => {
        if (response.data) {
          window.loation.href = response.data.redirectUrL
          return
        }
        onError(response)
      })
      .catch((error) => {
        onError(error)
      })
  },
}
