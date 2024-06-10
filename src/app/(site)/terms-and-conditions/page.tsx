import SectionHeader from "@/src/components/Common/SectionHeader";

const TermsAndConditions = () => {
  return (
    <section className="overflow-hidden pb-20 pt-40 lg:pb-25 xl:pb-30">
      <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">
        {/* <!-- Section Title Start --> */}
        <div className="animate_top mx-auto text-center">
          <SectionHeader
            headerInfo={{
              title: `TERMS AND CONDITIONS`,
              description: ``,
            }}
          />
        </div>
        <div className="relative mx-auto mt-15 max-w-[1207px] px-4 md:px-8 xl:mt-20 xl:px-0 legal-doc">
        <p>Welcome to <a href="/">WaitlistNinja</a>. These Terms and Conditions (&quot;T&C&quot;) govern your use of our waitlist management and referral tool, and email marketing platform (&quot;Platform&quot;). By accessing or using our Platform, you agree to comply with and be bound by these T&C.</p>
            
        <p><b>Definitions</b><br/>
        &quot;Platform&quot;: The website, mobile app, and any related services provided by <a href="/">WaitlistNinja</a>.<br/>
        &quot;User&quot;: Any individual or entity that registers for an account or uses the services provided by the Platform.</p>
        
        <p><b>Eligibility</b><br/>
        You must be at least 18 years old to use our Platform. By using our Platform, you represent and warrant that you meet this eligibility requirement. You agree to use the Platform in compliance with all local, state, national, and international laws and regulations.</p>

        <p><b>User Accounts</b><br/>
        To use certain features of the Platform, you must register for an account. You agree to provide accurate, current, and complete information during the registration process. You are responsible for maintaining the accuracy of the information you provide and for safeguarding your password and any activities or actions under your account.</p>

        <p><b>Waitlist Management</b><br/>
        You may use the waitlist management feature to manage customer waitlists. We collect and use data as described in our Privacy Policy. You agree to use this feature responsibly and in compliance with all applicable laws and regulations.</p>

        <p><b>Referral Program</b><br/>
        Our referral program allows users to refer others to the Platform. Participants must comply with the referral program rules and guidelines. We reserve the right to disqualify users for fraudulent activities or violations of the program rules.</p>

        <p><b>Email Marketing Campaigns</b><br/>
        Users must obtain proper consent from email recipients and comply with all applicable email marketing laws and regulations. You must ensure that you have obtained explicit consent from each email recipient and include an unsubscribe option in all marketing emails. You agree not to send emails containing false, misleading, or deceptive content.</p>

        <p><b>User Conduct</b><br/>
        Users agree not to engage in prohibited activities, including but not limited to spamming, hacking, and distributing harmful content. By submitting content, you grant us a non-exclusive, worldwide license to use, reproduce, and display such content for operational purposes.</p>

        <p><b>Intellectual Property</b><br/>
        All content and services on the Platform are the intellectual property of <a href="/">WaitlistNinja</a>. Users are granted a limited license to access and use the content for personal, non-commercial purposes. This license is revocable at any time.</p>

        <p><b>Privacy</b><br/>
        Please refer to our Privacy Policy for information on how we collect, use, and protect your data. We implement appropriate security measures to protect your data.</p>

        <p><b>Termination</b><br/>
        We reserve the right to terminate or suspend user accounts at our discretion. Upon termination, your right to use the Platform will cease immediately, and we may delete your data associated with your account.</p>

        <p><b>Disclaimers</b><br/>
        The Platform is provided &quot;as is&quot; without any warranties. We disclaim all warranties to the fullest extent permitted by law. We are not liable for any indirect, incidental, or consequential damages arising from your use of the Platform.</p>

        <p><b>Indemnification</b><br/>
        You agree to indemnify and hold <a href="/">WaitlistNinja</a> harmless from any claims, damages, losses, liabilities, and expenses arising out of or related to your use of the Platform, your violation of these T&C, or your infringement of any intellectual property or other rights of another person or entity.</p>

        <p><b>Governing Law</b><br/>
        These T&C are governed by the laws of West Bengal, India. Any disputes arising out of or related to these T&C or your use of the Platform will be resolved in the courts of West Bengal, India.</p>

        <p><b>Changes to Terms</b><br/>
        We may update these T&C from time to time. We will notify you of any changes by posting the new T&C on our Platform. Your continued use of the Platform after any such changes constitutes your acceptance of the new T&C.</p>

        <p><b>Contact Information</b><br/>
        For any questions or concerns about these T&C, please contact us at <a href="mailto:contact@waitlistninja.com">contact@waitlistninja.com</a></p>
        </div>
        {/* <!-- Section Title End --> */}
      </div>
    </section>
  );
};

export default TermsAndConditions;
