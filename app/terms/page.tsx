import type { Metadata } from "next";
import Link from "next/link";
import { LegalLayout } from "@/components/legal-layout";

export const metadata: Metadata = {
  title: "Terms of Service | inferoute",
  description:
    "The terms governing your use of the inferoute AI gateway operated by YOUTH FIRST SHOW PTE LTD.",
  alternates: { canonical: "https://inferoute.ai/terms" },
};

export default function TermsPage() {
  return (
    <LegalLayout title="Terms of Service" lastUpdated="May 27, 2026">
      <p>
        These Terms of Service (the &ldquo;Terms&rdquo;) form a binding
        agreement between you and <strong>YOUTH FIRST SHOW PTE LTD</strong>{" "}
        (&ldquo;Company&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;, or
        &ldquo;our&rdquo;), a company registered at 112 Robinson Road,
        #03-01, Robinson 112, Singapore 068902. The Terms govern your access
        to and use of the inferoute website at{" "}
        <a href="https://inferoute.ai">inferoute.ai</a> (the &ldquo;Site&rdquo;)
        and the inferoute AI gateway, APIs, dashboards, and related services
        (collectively, the &ldquo;Service&rdquo;).
      </p>
      <p>
        Please read these Terms carefully. By creating an account, clicking a
        button to indicate acceptance, or otherwise accessing the Service, you
        confirm that you have read and accept these Terms together with our{" "}
        <Link href="/privacy">Privacy Policy</Link>. If you do not accept the
        Terms, you must not use the Service.
      </p>

      <h2>1. The Service</h2>
      <p>
        inferoute is an OpenAI-compatible routing layer that lets you reach
        third-party generative AI models through a single API surface. You are
        responsible for choosing the models and providers you route to, and
        for any settings (such as fallbacks, provider pinning, prompt logging,
        and budget caps) you apply to your account. We may add, change, or
        remove models, providers, or features at any time.
      </p>

      <h2>2. Eligibility</h2>
      <p>
        To use the Service you must be at least 18 years old, or the age of
        majority in your jurisdiction, whichever is greater. By accepting
        these Terms you represent that:
      </p>
      <ul>
        <li>you meet the age requirement above;</li>
        <li>
          you have the right and authority to enter into these Terms,
          including, where you are using the Service on behalf of an
          organisation, the authority to bind that organisation;
        </li>
        <li>
          you are not located in, ordinarily resident in, or a national of any
          jurisdiction subject to comprehensive sanctions imposed by Singapore
          or the United Nations; and
        </li>
        <li>
          your use of the Service complies with all laws that apply to you.
        </li>
      </ul>

      <h2>3. Accounts</h2>
      <p>
        You must register an account to use most of the Service. You are
        responsible for keeping your credentials confidential and for every
        action taken using your account, whether by you, your employees, or
        anyone you invite to your workspace. Notify us immediately if you
        believe your credentials have been disclosed or that your account has
        been used without your authorisation.
      </p>
      <p>
        Where you create a workspace for an organisation, the administrator of
        that workspace controls user access, billing, and routing settings.
        Users invited to a workspace must use the Service in line with the
        configuration the administrator has set.
      </p>

      <h2>4. Credits and Payment</h2>

      <h3>4.1 Pre-Paid Credits</h3>
      <p>
        The Service is generally billed using pre-paid credits. You may
        purchase credits through the dashboard using a payment method we
        support. Credits are consumed as you use the Service, based on the
        per-token, per-request, or per-minute pricing applicable to the model
        and provider you selected.
      </p>

      <h3>4.2 Refunds and Expiration</h3>
      <p>
        Except where required by law, credit purchases are final and
        non-refundable. Unused credits may expire after a period that we
        publish on the Site, currently three hundred and sixty-five (365)
        days from the date of purchase. We may, at our discretion, refund
        amounts that were charged in error.
      </p>

      <h3>4.3 Auto Top-Up</h3>
      <p>
        You may enable automatic top-up so that credits are recharged when
        your balance falls below a threshold you choose. By enabling auto
        top-up you authorise us to charge the payment method on file, in the
        amount and at the threshold you have configured, until you disable the
        feature.
      </p>

      <h3>4.4 Taxes</h3>
      <p>
        All fees are exclusive of taxes, levies, and duties unless we expressly
        state otherwise. You are responsible for paying any indirect taxes
        applicable to your purchase. If we are required to collect such taxes,
        they will be added to the amount you pay.
      </p>

      <h3>4.5 Changes to Pricing</h3>
      <p>
        We may change pricing for the Service from time to time. We will give
        reasonable advance notice of any change. Changes apply only to credits
        purchased after the change takes effect.
      </p>

      <h2>5. Model Providers</h2>
      <p>
        Each model exposed through the Service is operated by a third-party
        provider. When you send a request, the prompt body and any context
        you include are forwarded to the provider you selected. That provider
        applies its own terms, acceptable use policy, content policy,
        availability commitments, and data-handling practices.
      </p>
      <p>
        You agree to review and comply with the terms of every provider whose
        models you use. We are not a party to your contract with any provider
        and we do not warrant the availability, accuracy, safety, or
        compliance of any model output. If a provider changes its terms or
        suspends its models, we may have to update or remove access on short
        notice.
      </p>

      <h2>6. Acceptable Use</h2>
      <p>
        You may not use the Service, and you must not let anyone else use the
        Service through your account, to:
      </p>
      <ul>
        <li>
          break the law, infringe the rights of others, or violate the
          acceptable use policy of any model provider;
        </li>
        <li>
          generate content that exploits or endangers minors, that is
          intended to harass or threaten an identifiable person, or that
          promotes violence, terrorism, or self-harm;
        </li>
        <li>
          generate or distribute malware, phishing kits, exploit code, or
          content intended to compromise the security of computer systems;
        </li>
        <li>
          impersonate any person or organisation, or misrepresent your
          affiliation with any person or organisation, in a way that is
          likely to mislead;
        </li>
        <li>
          attempt to circumvent rate limits, billing, authentication, or
          other technical safeguards of the Service;
        </li>
        <li>
          reverse engineer, scrape at industrial scale, or build a competing
          aggregator from the Service except to the extent that applicable
          law expressly permits; or
        </li>
        <li>
          use the Service to make decisions about a person&apos;s legal
          status, employment, credit, insurance, healthcare, or other
          high-risk matter without independent human review.
        </li>
      </ul>
      <p>
        You are responsible for the prompts you submit and for the way you,
        your employees, and your end users use the outputs the Service
        returns.
      </p>

      <h2>7. Inputs and Outputs</h2>
      <p>
        You retain whatever rights you have in the prompts and other content
        you submit to the Service (&ldquo;Inputs&rdquo;) and in the outputs
        the Service returns to you (&ldquo;Outputs&rdquo;). You grant us a
        limited, non-exclusive licence to host, transmit, log (only to the
        extent your account configuration allows), and process Inputs and
        Outputs solely for the purpose of operating, securing, and improving
        the Service.
      </p>
      <p>
        Generative models may produce Outputs that are inaccurate, offensive,
        or that resemble content created by other users. You are responsible
        for evaluating the suitability of Outputs for your use case before
        relying on them.
      </p>

      <h2>8. Our Intellectual Property</h2>
      <p>
        The Site, the Service, our logos, and any documentation we publish are
        owned by the Company or its licensors and are protected by copyright
        and other intellectual property laws. Subject to your compliance with
        these Terms, we grant you a limited, non-exclusive, non-transferable
        licence to access and use the Service. We reserve all rights not
        expressly granted in these Terms.
      </p>

      <h2>9. Feedback</h2>
      <p>
        If you send us suggestions, feedback, or ideas about the Service, you
        grant us a perpetual, irrevocable, royalty-free, worldwide licence to
        use that feedback for any purpose, including to improve the Service,
        without obligation to compensate you.
      </p>

      <h2>10. Beta Features</h2>
      <p>
        Features we mark as beta, preview, experimental, or similar are
        offered for evaluation only, may change or be discontinued at any
        time, and may not work as intended. Beta features are provided on an
        &ldquo;as is&rdquo; basis without any service-level commitment.
      </p>

      <h2>11. Suspension and Termination</h2>
      <p>
        You may close your account at any time through the dashboard. We may
        suspend or terminate your access to all or part of the Service at any
        time if we reasonably believe that you have breached these Terms, that
        your use of the Service creates legal or security risk for us or for
        other users, or that we are required to do so by law. Where
        practicable we will give notice before doing so.
      </p>
      <p>
        Sections of these Terms that by their nature should survive
        termination &mdash; including those covering payment, intellectual
        property, disclaimers, limitation of liability, indemnification, and
        dispute resolution &mdash; will continue to apply.
      </p>

      <h2>12. Disclaimers</h2>
      <p>
        The Service is provided on an &ldquo;as is&rdquo; and &ldquo;as
        available&rdquo; basis. To the maximum extent permitted by law, we
        disclaim all warranties, whether express, implied, or statutory,
        including warranties of merchantability, fitness for a particular
        purpose, title, and non-infringement, and any warranty that the
        Service will be uninterrupted, error-free, secure, or free from
        harmful components.
      </p>
      <p>
        We do not warrant that any Output is accurate, complete, lawful, or
        suitable for your purpose, and we do not endorse any view, opinion, or
        recommendation that an Output may contain.
      </p>

      <h2>13. Limitation of Liability</h2>
      <p>
        To the maximum extent permitted by law, in no event will the Company
        or its affiliates, officers, employees, or licensors be liable for
        any indirect, incidental, special, consequential, exemplary, or
        punitive damages, or for any loss of profits, revenue, data,
        goodwill, or business opportunity, whether based on contract, tort,
        statute, or any other theory, even if we have been advised of the
        possibility of such damages.
      </p>
      <p>
        Our total aggregate liability arising out of or relating to the
        Service or these Terms will not exceed the greater of (a) the amount
        you paid us for the Service in the twelve (12) months immediately
        before the event giving rise to the claim, or (b) one hundred
        Singapore dollars (S$100). The limitations in this section apply
        even if a remedy fails of its essential purpose.
      </p>

      <h2>14. Indemnification</h2>
      <p>
        You will indemnify, defend, and hold harmless the Company, its
        affiliates, and their respective officers, employees, and agents
        from and against any claim, demand, or proceeding brought by a third
        party, and any related liabilities, damages, losses, costs, and
        reasonable legal fees, that arises out of (a) your Inputs or Outputs,
        (b) your use of the Service in breach of these Terms or applicable
        law, or (c) your violation of any third-party right, including any
        model provider&apos;s terms.
      </p>

      <h2>15. Confidentiality</h2>
      <p>
        Each party may receive non-public information from the other in
        connection with the Service. The receiving party will protect that
        information using reasonable care and will use it only to perform
        these Terms. This section does not restrict information that is or
        becomes public through no fault of the receiving party, that the
        receiving party already lawfully held, or that is required to be
        disclosed by law or court order.
      </p>

      <h2>16. Governing Law and Jurisdiction</h2>
      <p>
        These Terms are governed by the laws of the Republic of Singapore,
        without regard to its conflict-of-laws rules. The courts of Singapore
        will have exclusive jurisdiction over any dispute, controversy, or
        claim arising out of or relating to these Terms or the Service,
        except that we may seek injunctive or equitable relief in any court
        of competent jurisdiction to protect our intellectual property or
        confidential information.
      </p>

      <h2>17. Changes to the Terms</h2>
      <p>
        We may revise these Terms from time to time. The &ldquo;Last
        updated&rdquo; date at the top of this page indicates when the latest
        version took effect. If a change is material we will give additional
        notice, for example by email or through the dashboard, before it
        takes effect. By continuing to use the Service after a change takes
        effect you accept the revised Terms; if you do not accept them, your
        only remedy is to stop using the Service.
      </p>

      <h2>18. Miscellaneous</h2>
      <p>
        These Terms, together with our Privacy Policy and any policy
        referenced from the Service, contain the entire agreement between you
        and the Company regarding the Service and supersede any prior
        agreement on the same subject. If a court finds any part of these
        Terms unenforceable, the remaining parts will continue in effect.
        Our failure to enforce a right or provision is not a waiver of that
        right or provision. You may not assign these Terms without our prior
        written consent; we may assign them in connection with a merger,
        acquisition, or sale of assets.
      </p>

      <h2>19. Contact</h2>
      <p>
        Questions about these Terms can be sent to:
      </p>
      <p>
        <strong>YOUTH FIRST SHOW PTE LTD</strong>
        <br />
        112 Robinson Road, #03-01, Robinson 112
        <br />
        Singapore 068902
        <br />
        Email:{" "}
        <a href="mailto:inferoute@glodrapay.com">inferoute@glodrapay.com</a>
      </p>
    </LegalLayout>
  );
}
