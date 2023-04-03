import {Component} from 'react'
import Header from '../Header'
import FaqItem from '../FaqItem'
import './index.css'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  loading: 'LOADING',
}

class About extends Component {
  state = {faqData: [], apiStatus: apiStatusConstants.initial}

  componentDidMount() {
    this.getFaqData()
  }

  getFaqData = async () => {
    this.setState({apiStatus: apiStatusConstants.loading})
    const apiUrl = 'https://apis.ccbp.in/covid19-faqs'
    const response = await fetch(apiUrl)
    console.log(response)
    if (response.ok) {
      const data = await response.json()
      console.log(data)
      this.setState({apiStatus: apiStatusConstants.success, faqData: data})
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  renderSuccessView = () => {
    const {faqData} = this.state
    console.log(faqData)
    const {faq} = faqData
    const dateObject = new Date()
    return (
      <div className="faq-details-container">
        <h1 className="about-heading content">About</h1>
        <p className="about-update content">{`Last update on ${dateObject}`}</p>
        <p className="about-description content">
          COVID-19 vaccines be ready for distribution
        </p>
        <ul className="faq-list-container">
          {faq.map(faqItem => (
            <FaqItem key={faq.qno} faqItem={faqItem} />
          ))}
        </ul>
      </div>
    )
  }

  renderFaqs = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case 'SUCCESS':
        return this.renderSuccessView()
      case 'LOADING':
        return this.renderLoadingView
      default:
        return null
    }
  }

  render() {
    return (
      <div className="page-container">
        <Header />
        {this.renderFaqs()}
      </div>
    )
  }
}

export default About
