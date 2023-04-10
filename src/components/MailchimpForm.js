import MailchimpSubscribe from "react-mailchimp-subscribe";
import { Newsletter } from "./Newletter";
export const MailchimpForm = () => {
  const  REACT_APP_MAILCHIMP_URL = "http://eepurl.com/inS4TM"
  const  REACT_APP_MAILCHIMP_U= "SRIHARINARAYAN"
  const    REACT_APP_MAILCHIMP_ID = "1bcfa352f0"
    const postUrl = `${REACT_APP_MAILCHIMP_URL}?u=${REACT_APP_MAILCHIMP_U}sid=${REACT_APP_MAILCHIMP_ID}`

    return (
        <>
        <MailchimpSubscribe
        url={postUrl}
        render={({ subscribe, status, message}) => (
            <Newsletter
            status={status}
            message={message}
            onValidated={formData => subscribe(formData)}/>
        )}
        />
        </>
    )
}