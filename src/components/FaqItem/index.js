import './index.css'

const FaqItem = props => {
  const {faqItem} = props
  const {answer, question} = faqItem
  return (
    <li className="faq-list-item">
      <p className="content question">{question}</p>
      <p className="content answer">{answer}</p>
    </li>
  )
}

export default FaqItem
