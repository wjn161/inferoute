import type { Metadata } from "next";
import Link from "next/link";
import { LegalLayout } from "@/components/legal-layout";

export const metadata: Metadata = {
  title: "Data Processing Agreement | inferoute",
  description:
    "The Data Processing Agreement between YOUTH FIRST SHOW PTE LTD and customers of the inferoute AI gateway, covering GDPR Article 28 and Singapore PDPA obligations.",
  alternates: { canonical: "https://inferoute.ai/dpa" },
};

export default function DpaPage() {
  return (
    <LegalLayout title="Data Processing Agreement" lastUpdated="May 27, 2026">
      <p>
        This Data Processing Agreement (the &ldquo;DPA&rdquo;) supplements the{" "}
        <Link href="/terms">Terms of Service</Link> between{" "}
        <strong>YOUTH FIRST SHOW PTE LTD</strong>, a company registered at 112
        Robinson Road, #03-01, Robinson 112, Singapore 068902 (the
        &ldquo;Processor&rdquo;), and the customer that has accepted the Terms
        of Service (the &ldquo;Controller&rdquo;). It applies whenever the
        Processor processes Personal Data on behalf of the Controller in the
        course of providing the inferoute AI gateway (the &ldquo;Service&rdquo;).
      </p>
      <p>
        The DPA is intended to satisfy the requirements of Article 28 of the
        EU General Data Protection Regulation (Regulation (EU) 2016/679, the
        &ldquo;GDPR&rdquo;) and the corresponding requirements of the United
        Kingdom Data Protection Act 2018, the Singapore Personal Data
        Protection Act 2012 (the &ldquo;PDPA&rdquo;), and other data protection
        laws that apply to the parties (collectively, &ldquo;Data Protection
        Laws&rdquo;).
      </p>
      <p>
        Where the Terms of Service and this DPA conflict on a topic of data
        protection, this DPA prevails.
      </p>

      <h2>1. Definitions</h2>
      <p>
        Capitalised terms used but not defined here have the meaning given in
        the Terms of Service or in the applicable Data Protection Laws. In this
        DPA:
      </p>
      <ul>
        <li>
          <strong>&ldquo;Personal Data&rdquo;</strong> means any information
          relating to an identified or identifiable natural person that the
          Processor handles on behalf of the Controller through the Service.
        </li>
        <li>
          <strong>&ldquo;Process&rdquo;</strong>,{" "}
          <strong>&ldquo;Processing&rdquo;</strong>, and{" "}
          <strong>&ldquo;Processed&rdquo;</strong> have the meaning given in
          Article 4 of the GDPR.
        </li>
        <li>
          <strong>&ldquo;Data Subject&rdquo;</strong> means the natural person
          to whom Personal Data relates.
        </li>
        <li>
          <strong>&ldquo;Sub-processor&rdquo;</strong> means any third party
          engaged by the Processor to Process Personal Data on behalf of the
          Controller in connection with the Service.
        </li>
        <li>
          <strong>&ldquo;Personal Data Breach&rdquo;</strong> means a breach of
          security leading to the accidental or unlawful destruction, loss,
          alteration, unauthorised disclosure of, or access to Personal Data.
        </li>
        <li>
          <strong>&ldquo;Model Provider&rdquo;</strong> means a third-party
          operator of an AI model that the Controller selects through the
          Service.
        </li>
      </ul>

      <h2>2. Roles of the Parties</h2>
      <p>
        The parties acknowledge that, in respect of the Personal Data Processed
        through the Service:
      </p>
      <ul>
        <li>
          the Controller acts as a controller (or, where the Controller is
          itself a processor for another controller, as a processor); and
        </li>
        <li>the Processor acts as a processor.</li>
      </ul>
      <p>
        Where the Controller is itself a processor, the Controller warrants
        that it has authority from the relevant controller to engage the
        Processor as a sub-processor on the terms of this DPA.
      </p>

      <h2>3. Subject Matter and Duration</h2>
      <p>
        The subject matter of the Processing is the operation of the Service
        for the Controller. Processing continues for as long as the Controller
        uses the Service and for any retention period required by law.
        Annex&nbsp;A describes the nature and purpose of the Processing, the
        categories of Personal Data and Data Subjects, and the duration in
        more detail.
      </p>

      <h2>4. Controller&apos;s Instructions</h2>
      <p>
        The Processor will Process Personal Data only on documented
        instructions from the Controller. The Terms of Service, this DPA, the
        configuration the Controller selects in the dashboard, and the API
        requests the Controller submits each constitute documented
        instructions for the purposes of Article 28(3)(a) of the GDPR.
      </p>
      <p>
        The Processor will inform the Controller without undue delay if, in
        its opinion, an instruction infringes a Data Protection Law, unless
        the Processor is prohibited from giving that notification by law.
      </p>

      <h2>5. Confidentiality</h2>
      <p>
        The Processor will ensure that personnel authorised to Process
        Personal Data are bound by an appropriate obligation of
        confidentiality (whether contractual or statutory) and have received
        suitable training on their data protection responsibilities.
      </p>

      <h2>6. Security of Processing</h2>
      <p>
        The Processor will implement and maintain appropriate technical and
        organisational measures to protect Personal Data against unauthorised
        or unlawful Processing and against accidental loss, destruction, or
        damage. These measures take into account the state of the art, the
        cost of implementation, the nature, scope, context, and purposes of
        Processing, and the risk to Data Subjects. A summary of the measures
        is set out in Annex&nbsp;B.
      </p>
      <p>
        The Processor reviews these measures periodically and may update them
        from time to time, provided the level of protection is not materially
        reduced.
      </p>

      <h2>7. Sub-processors</h2>
      <p>
        The Controller gives the Processor general authorisation to engage
        Sub-processors to Process Personal Data, subject to this section.
      </p>
      <ul>
        <li>
          <strong>Categories.</strong> The Processor may engage
          Sub-processors that provide cloud hosting, content delivery, error
          monitoring, transactional email, payment processing, customer
          support tooling, and similar functions necessary to operate the
          Service. <strong>Model Providers</strong> selected by the Controller
          are Sub-processors with respect to the prompts and outputs the
          Controller routes to them.
        </li>
        <li>
          <strong>List and updates.</strong> The Processor maintains a current
          list of its Sub-processors and will notify the Controller of any
          intended addition or replacement at least fourteen (14) days before
          the change takes effect, by email or by an in-product notice. The
          Controller may object to a change by writing to{" "}
          <a href="mailto:inferoute@glodrapay.com">
            inferoute@glodrapay.com
          </a>{" "}
          on reasonable data protection grounds before the change takes
          effect; if the parties cannot agree on a remedy, the Controller may
          terminate the affected portion of the Service.
        </li>
        <li>
          <strong>Flow-down.</strong> The Processor will impose data
          protection terms on each Sub-processor that are no less protective
          than those in this DPA, and remains responsible to the Controller
          for the performance of each Sub-processor&apos;s obligations.
        </li>
      </ul>

      <h2>8. International Data Transfers</h2>
      <p>
        Personal Data may be transferred to, stored in, or accessed from
        jurisdictions outside the country where the Controller is located,
        including Singapore, the European Economic Area, the United Kingdom,
        and the United States.
      </p>
      <p>
        Where Personal Data subject to the GDPR or UK GDPR is transferred to
        a country that the European Commission or the UK government has not
        recognised as providing an adequate level of protection, the parties
        will rely on the European Commission&apos;s Standard Contractual
        Clauses (Module Two for controller-to-processor transfers and Module
        Three for processor-to-processor transfers, as applicable), or the
        UK International Data Transfer Addendum, which are incorporated into
        this DPA by reference.
      </p>
      <p>
        Where Personal Data is governed by the PDPA, the Processor will take
        steps reasonably required by the PDPA to ensure that the recipient is
        bound by legally enforceable obligations to provide a comparable
        standard of protection.
      </p>

      <h2>9. Assistance to the Controller</h2>

      <h3>9.1 Data Subject Requests</h3>
      <p>
        Taking into account the nature of the Processing, the Processor will
        provide reasonable assistance to the Controller, by appropriate
        technical and organisational measures, to enable the Controller to
        respond to requests from Data Subjects to exercise their rights under
        Data Protection Laws. If the Processor receives a request directly
        from a Data Subject, it will not respond to the substance of the
        request and will, unless prohibited by law, forward the request to
        the Controller without undue delay.
      </p>

      <h3>9.2 Data Protection Impact Assessments</h3>
      <p>
        The Processor will provide reasonable assistance to the Controller
        with any data protection impact assessment or prior consultation with
        a supervisory authority that the Controller is required to conduct
        under Articles 35 and 36 of the GDPR or equivalent provisions of
        other Data Protection Laws, in each case to the extent the assistance
        relates to the Service.
      </p>

      <h2>10. Personal Data Breach Notification</h2>
      <p>
        The Processor will notify the Controller without undue delay, and in
        any event within seventy-two (72) hours, after becoming aware of a
        Personal Data Breach affecting the Controller&apos;s Personal Data.
        The notification will, to the extent then known, describe:
      </p>
      <ul>
        <li>the nature of the breach and the categories of data affected;</li>
        <li>the likely consequences of the breach;</li>
        <li>
          the measures taken or proposed to be taken to address the breach;
          and
        </li>
        <li>
          a contact point at the Processor where further information can be
          obtained.
        </li>
      </ul>
      <p>
        The Processor will cooperate with the Controller and provide such
        further information as the Controller reasonably requires to comply
        with its own breach notification obligations.
      </p>

      <h2>11. Audits and Inspections</h2>
      <p>
        The Processor will make available to the Controller all information
        reasonably necessary to demonstrate compliance with this DPA, and
        will allow for and contribute to audits, including inspections,
        conducted by the Controller or another auditor mandated by the
        Controller. To minimise disruption, the parties agree that:
      </p>
      <ul>
        <li>
          the Controller may exercise audit rights once per twelve (12) month
          period, except where a competent supervisory authority requires
          otherwise or where the Controller has a reasonable, specific
          concern arising from a Personal Data Breach;
        </li>
        <li>
          the Controller will give the Processor at least thirty (30) days
          prior written notice of any audit;
        </li>
        <li>
          the Controller, its auditor, and any persons given access to the
          Processor&apos;s systems or information must be bound by
          confidentiality obligations no less strict than those in the Terms
          of Service; and
        </li>
        <li>
          the Processor may meet audit requests by providing the Controller
          with copies of recent independent third-party assessments (such as
          ISO 27001 or SOC 2 reports) where these reasonably address the
          Controller&apos;s questions.
        </li>
      </ul>

      <h2>12. Return or Deletion of Personal Data</h2>
      <p>
        On termination of the Service, the Processor will, at the
        Controller&apos;s choice, return Personal Data to the Controller or
        delete it, except to the extent retention is required by law or by
        legitimate accounting or audit obligations. The Controller may, at
        any time during the term, export Personal Data through the Service or
        request deletion of stored prompts and completions in accordance with
        the configuration available on its account.
      </p>

      <h2>13. Liability</h2>
      <p>
        Each party&apos;s liability arising under or in connection with this
        DPA is subject to the limitations and exclusions of liability set out
        in the Terms of Service. Nothing in this DPA limits a Data
        Subject&apos;s rights against either party under Article 82 of the
        GDPR or analogous provisions of other Data Protection Laws.
      </p>

      <h2>14. Term and Termination</h2>
      <p>
        This DPA takes effect on the date the Controller accepts the Terms of
        Service and continues for as long as the Processor Processes Personal
        Data on behalf of the Controller. Provisions that by their nature
        should survive termination, including those relating to security,
        confidentiality, audit, deletion, and liability, will continue to
        apply.
      </p>

      <h2>15. Governing Law</h2>
      <p>
        This DPA is governed by the laws of the Republic of Singapore, except
        to the extent that mandatory provisions of an applicable Data
        Protection Law require a different governing law. Disputes arising
        out of or in connection with this DPA are subject to the dispute
        resolution provisions in the Terms of Service.
      </p>

      <h2>16. Order of Precedence</h2>
      <p>
        If there is any conflict between this DPA, any Standard Contractual
        Clauses incorporated by reference, the Terms of Service, and any
        order form, the order of precedence is: (1) the Standard Contractual
        Clauses, (2) this DPA, (3) any order form, (4) the Terms of Service.
      </p>

      <h2>Annex A &mdash; Description of Processing</h2>
      <h3>Subject matter and duration</h3>
      <p>
        The Processor processes Personal Data for the purpose of operating the
        Service for the Controller. Processing lasts for the term of the
        Terms of Service, plus any period required by law or for legitimate
        accounting or audit purposes.
      </p>
      <h3>Nature and purpose of Processing</h3>
      <p>
        Receipt of API requests, authentication and authorisation of users,
        forwarding of prompts to the Model Provider selected by the
        Controller, return of model output, logging of metadata for billing
        and abuse prevention, and (where the Controller has enabled it)
        storage of prompt and completion bodies for the period the
        Controller has configured.
      </p>
      <h3>Categories of Data Subjects</h3>
      <ul>
        <li>users and administrators of the Controller&apos;s account;</li>
        <li>
          end users of any product or service the Controller builds on top of
          the Service; and
        </li>
        <li>
          any other natural person whose Personal Data the Controller chooses
          to include in a prompt.
        </li>
      </ul>
      <h3>Categories of Personal Data</h3>
      <ul>
        <li>
          identifiers and account data (name, email address, organisation,
          authentication tokens);
        </li>
        <li>
          billing data (payment instrument metadata, billing address, tax
          identifiers);
        </li>
        <li>
          technical and usage data (IP address, user-agent, request and
          response metadata, model and provider used, token counts, latency,
          cost);
          {" "}
        </li>
        <li>
          content the Controller submits (prompt and completion bodies, and
          any Personal Data the Controller chooses to embed in them); and
        </li>
        <li>
          support data (records of correspondence with the Processor and
          information shared in support tickets).
        </li>
      </ul>
      <h3>Special categories of data</h3>
      <p>
        The Service is not designed to receive special categories of data
        within the meaning of Article 9 of the GDPR. The Controller should
        not submit such data unless it has implemented additional safeguards
        appropriate to the risk.
      </p>

      <h2>Annex B &mdash; Technical and Organisational Measures</h2>
      <p>
        The Processor implements measures including, but not limited to, the
        following:
      </p>
      <ul>
        <li>
          <strong>Encryption.</strong> TLS 1.2 or higher for data in transit;
          encryption at rest for production data stores using industry-standard
          algorithms.
        </li>
        <li>
          <strong>Access control.</strong> Role-based access to production
          systems, single sign-on with multi-factor authentication for staff,
          least-privilege principles, and periodic review of access rights.
        </li>
        <li>
          <strong>Network security.</strong> Segmented production networks,
          firewalls and security groups limiting ingress and egress, and
          isolation of customer data.
        </li>
        <li>
          <strong>Application security.</strong> Secure development
          lifecycle, peer code review, dependency scanning, and pre-release
          testing.
        </li>
        <li>
          <strong>Logging and monitoring.</strong> Centralised logging,
          monitoring of security events, alerting on anomalous behaviour, and
          retention of audit trails for a reasonable period.
        </li>
        <li>
          <strong>Backups and resilience.</strong> Periodic backups of
          essential systems, separation of backup storage, and a documented
          incident response plan.
        </li>
        <li>
          <strong>Personnel.</strong> Background checks where permitted by
          law, written confidentiality undertakings, and security awareness
          training.
        </li>
        <li>
          <strong>Vendor management.</strong> Due diligence on Sub-processors
          and contractual data protection commitments.
        </li>
        <li>
          <strong>Data subject rights.</strong> Tooling to support export and
          deletion of Personal Data on request.
        </li>
      </ul>

      <h2>Annex C &mdash; Sub-processors</h2>
      <p>
        A current list of Sub-processors used to provide the Service is
        available on request to{" "}
        <a href="mailto:inferoute@glodrapay.com">
          inferoute@glodrapay.com
        </a>
        . Each Model Provider selected by the Controller through the
        dashboard is also a Sub-processor with respect to the prompts and
        outputs routed to it.
      </p>

      <h2>Contact</h2>
      <p>
        Questions or notices under this DPA should be sent to:
      </p>
      <p>
        <strong>YOUTH FIRST SHOW PTE LTD</strong>
        <br />
        112 Robinson Road, #03-01, Robinson 112
        <br />
        Singapore 068902
        <br />
        Email:{" "}
        <a href="mailto:inferoute@glodrapay.com">
          inferoute@glodrapay.com
        </a>
      </p>
    </LegalLayout>
  );
}
