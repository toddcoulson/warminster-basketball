import * as React from "react"
import Layout from "../components/Layout"

export default function Home() {
  return <>
  <Layout>
    <h1>SECURITY CLEARANCES</h1>
    
    <h4>CLEARANCES ARE VALID FOR 5 YEARS</h4>
    <p>All Volunteers will be required by WBA to affirm their compliance with these laws
and retain copies of all clearances.</p>

    <ol>
      <li>Child Abuse Background Check</li>
      <span>https://www.compass.state.pa.us/cwis/public/home</span>
      <ul>
        <li>Go to the website and click "Create Individual Account" and then click "Next"</li>
        <li>Make sure to create a Keystone ID, enter all required information, and then click "Finish"</li>
        <li>A temporary password will be sent to you via Email.</li>
        <li>Go back to the website above and click "Individual Login"</li>
        <li>Then click "Access My Clearances" and then click continue.</li>
        <li>Type in Username (Keystone ID) and Temporary Password and then click "Login"</li>
        <li>Once you are logged in, create a new password, and then click "Submit"</li>
        <li>Login again using your Keystone ID and your new password that you just created.</li>
        <li>Click "I Have Read, Fully Understand, and agree to the My Child Welfare Account Terms and Conditions, and then click "Next".</li>
        <li>Click "Continue" and then click "Create Clearance Application"</li>
        <li>Click "Begin" and enter all required information, payment with credit card or organization provided payment code. And then Logout</li>
        <li>You will receive an email when your background search results are complete</li>
        <li>Go back to the link above and click "Login" and then click "Access My Clearances" then click "Continue".</li>
        <li>Login using your Keystone ID and password - and then click "View Results"</li>
        <li>Then click "Print the Certificate" - You can also save the document for your own records.</li>
      </ul>

      <li>PA STATE POLICE BACKGROUND CHECK (FREE)</li>
      <span>https://epatch.state.pa.us/Home.jsp</span>
      <ul>
        <li>Go to the website above and click "New Record Check (Volunteers Only)".</li>
        <li>Click "Accept" and fill in all required information.  (Note: This section is the
      information of the person seeking to get a record check of an individual, such as
      a potential employer. In this case, you.)</li>
        <li>Click "Next" and then click "Proceed"</li>
        <li>Complete the required information for the person you wish to get a record check on (In this case, you).</li>
        <li>Follow the on screen instructions.</li>
        <li>When the check is completed, click "Control #" and "Print Page"</li>
      </ul>
    </ol>
    </Layout>
  </>
}