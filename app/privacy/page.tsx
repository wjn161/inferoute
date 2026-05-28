import type { Metadata } from "next";
import Link from "next/link";
import { LegalLayout } from "@/components/legal-layout";

export const metadata: Metadata = {
  title: "Privacy Policy | inferoute",
  description:
    "How YOUTH FIRST SHOW PTE LTD collects, uses, and protects personal data when you use the inferoute AI gateway.",
  alternates: { canonical: "https://inferoute.ai/privacy" },
};

export default function PrivacyPage() {
  return (
    <LegalLayout title="Privacy Policy" lastUpdated="May 27, 2026">
      <p>
        This Privacy Policy explains how <strong>YOUTH FIRST SHOW PTE LTD</strong>{" "}
        (&ldquo;Company&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;), a company
        registered at 112 Robinson Road, #03-01, Robinson 112, Singapore 068902,
        handles personal information in connection with the inferoute website
        (the &ldquo;Site&rdquo;) and the inferoute AI gateway service (the &ldquo;Service&rdquo;).
      </p>
      <p>
        We operate inferoute as an OpenAI-compatible routing layer that forwards
        prompts to third-party model providers on your behalf. Because of that
        architecture, this policy explains both what we collect ourselves and
        what we forward to upstream providers. Capitalized terms not defined
        here have the meaning given in our{" "}
        <Link href="/terms">Terms of Service</Link>.
      </p>
      <p>
        By accessing the Site or the Service you confirm that you have read this
        policy. If you do not agree, please do not use the Service.
      </p>

      <h2>1. Information We Collect</h2>

      <h3>1.1 Information You Provide</h3>
      <p>We collect information you give us directly, including:</p>
      <ul>
        <li>
          <strong>Account information</strong> &mdash; the email address, name,
          and authentication identifiers you submit when creating or managing an
          account.
        </li>
        <li>
          <strong>Billing information</strong> &mdash; the payment instrument,
          billing address, and tax-related data required to process credit
          purchases. Card numbers themselves are tokenised by our payment
          processor; we never store full card data.
        </li>
        <li>
          <strong>Communications</strong> &mdash; the content of support
          tickets, emails, and feedback you send to us.
        </li>
        <li>
          <strong>Configuration data</strong> &mdash; routing rules, provider
          allow-lists, project labels, and similar settings you save in your
          account.
        </li>
      </ul>

      <h3>1.2 Information Collected Automatically</h3>
      <p>
        When you interact with the Service, our infrastructure logs technical
        signals required to operate, secure, and bill the platform. These
        include IP address, user-agent, request timestamps, response status
        codes, the model and provider selected, token counts, latency, and the
        cost recorded against your account.
      </p>
      <p>
        Where you have not opted into prompt logging, the body of your prompts
        and the model output are processed in memory only, used to fulfil the
        request, and discarded once the response is returned. Where you have
        opted in, prompt and completion bodies are retained against your
        account for the period you have configured.
      </p>

      <h3>1.3 Cookies and Similar Technologies</h3>
      <p>
        The Site uses a small number of cookies. Strictly necessary cookies keep
        you logged in and protect against forgery. Optional analytics cookies,
        when enabled, help us understand which pages are visited so that we can
        improve them. You may disable optional cookies in your browser; the
        Service will continue to function but some features may be reduced.
      </p>

      <h2>2. How We Use Information</h2>
      <p>We use the information described above to:</p>
      <ul>
        <li>provide, maintain, and improve the Service;</li>
        <li>route requests to the model provider you selected;</li>
        <li>
          authenticate users, prevent abuse, and enforce rate limits and quotas;
        </li>
        <li>
          calculate usage, generate invoices, and process payments and refunds;
        </li>
        <li>
          respond to support requests and notify you of operational or security
          events;
        </li>
        <li>
          detect, investigate, and prevent fraudulent or unlawful activity; and
        </li>
        <li>
          comply with applicable law, including the Singapore Personal Data
          Protection Act 2012 (PDPA) and other regulations that apply to us.
        </li>
      </ul>

      <h2>3. How We Share Information</h2>

      <h3>3.1 Model Providers</h3>
      <p>
        When you submit a request, the prompt body and any in-prompt context
        you include are forwarded to the model provider you selected (for
        example, the operator of an upstream API). Each provider applies its
        own privacy and data-retention practices, which we do not control. You
        are responsible for reviewing and accepting the terms of every model
        you choose to route through.
      </p>

      <h3>3.2 Service Providers</h3>
      <p>
        We rely on a limited number of vendors to host infrastructure, send
        transactional email, process payments, and deliver customer support.
        These vendors process personal data only on our instructions and under
        contractual confidentiality and security obligations.
      </p>

      <h3>3.3 Legal and Safety</h3>
      <p>
        We may disclose information when we reasonably believe disclosure is
        required to comply with law, a binding legal request, or to protect the
        rights, property, or safety of users, third parties, or the Company.
      </p>

      <h3>3.4 Corporate Transactions</h3>
      <p>
        If we are involved in a merger, acquisition, financing, or sale of
        assets, personal data may be transferred as part of that transaction.
        We will require any successor to honour the commitments in this policy
        or to provide you with notice of any material change.
      </p>

      <h3>3.5 With Your Consent</h3>
      <p>We share information for any other purpose with your consent.</p>

      <h2>4. International Data Transfers</h2>
      <p>
        We are based in Singapore. Our infrastructure and many of our model
        providers operate in other jurisdictions, including the United States
        and the European Economic Area. Where personal data is transferred
        outside Singapore, we take steps reasonably required by the PDPA to
        ensure that the receiving organisation provides a comparable standard
        of protection, such as relying on contractual safeguards.
      </p>

      <h2>5. Data Retention</h2>
      <p>
        We retain account, billing, and operational logs for the period
        necessary to provide the Service and to meet our legal, tax, and
        accounting obligations. Aggregated and de-identified data, which can no
        longer be associated with you, may be retained indefinitely for
        analytics and product improvement.
      </p>
      <p>
        Prompt and completion bodies are retained according to the logging
        configuration on your account. You can change this configuration at any
        time, and you can request deletion of stored prompts as described in
        the next section.
      </p>

      <h2>6. Your Rights</h2>
      <p>
        Subject to applicable law, you may have the right to access, correct,
        update, port, or request deletion of personal data we hold about you,
        and to withdraw consent for processing that relies on consent. You may
        also have the right to lodge a complaint with the Personal Data
        Protection Commission of Singapore or the equivalent authority in your
        jurisdiction.
      </p>
      <p>
        To exercise any of these rights, contact us at{" "}
        <a href="mailto:privacy@inferoute.ai">privacy@inferoute.ai</a>. We may
        ask you to verify your identity before acting on a request.
      </p>

      <h2>7. Security</h2>
      <p>
        We use administrative, technical, and physical safeguards designed to
        protect personal data, including encryption in transit, access
        controls, and regular review of our infrastructure. No system can be
        guaranteed entirely secure, and we cannot warrant that unauthorised
        access will never occur. If we discover a security incident affecting
        your personal data we will notify you as required by law.
      </p>

      <h2>8. Children</h2>
      <p>
        The Service is not directed to children under 13, and we do not
        knowingly collect personal data from anyone under that age. If you
        believe a child has provided us with personal data, please contact us
        and we will take steps to delete it.
      </p>

      <h2>9. Third-Party Links</h2>
      <p>
        The Site may link to third-party websites, including documentation
        portals, model provider sites, and community forums. We are not
        responsible for the privacy practices of those sites; this policy
        applies only to the Service and the Site we operate.
      </p>

      <h2>10. Changes to this Policy</h2>
      <p>
        We may update this Privacy Policy from time to time. The &ldquo;Last
        updated&rdquo; date at the top of the page indicates when the latest
        version took effect. If a change is material we will provide
        additional notice, for example by email or by a banner on the Site.
        Your continued use of the Service after the change becomes effective
        means you accept the updated policy.
      </p>

      <h2>11. Contact</h2>
      <p>
        If you have questions about this Privacy Policy or how we handle
        personal data, contact us at:
      </p>
      <p>
        <strong>YOUTH FIRST SHOW PTE LTD</strong>
        <br />
        112 Robinson Road, #03-01, Robinson 112
        <br />
        Singapore 068902
        <br />
        Email:{" "}
        <a href="mailto:privacy@inferoute.ai">inferoute@glodrapay.com</a>
      </p>
    </LegalLayout>
  );
}
