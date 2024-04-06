<!DOCTYPE html>
<html lang="en">

<head>
    <title>Privacy Policy - Definitely Science - Free Online Unblocked Games</title>
    <?php include "assets/includes/head.php" ?>

    <style>
    #privacyText {
        color: var(--light-color);
        padding-right: 2vw;
        padding-left: 2vw;
    }

    #privacyText h1 {
        text-align: center;
    }

    #privacyText {
        margin-top: 120px;
        margin-bottom: 120px;
    }
    </style>
</head>

<body>
    <?php include "assets/includes/navbar.php" ?>

    <div id="privacyText">
        <h1>TotallyScience LLC Privacy Policy (“Policy”)</h1>
        <p>TotallyScience LLC's (TotallyScience) primary client goal is to protect your privacy. This privacy notice
            contains our policies relating to nonpublic information of clients, prospective clients and former clients.
            This Policy is to advise you
            of the ways in which TotallyScience collects, uses, shares and protects information you share with
            TotallyScience through TotallyScience's website, www.TotallyScience.co (the “Site”). Any person accessing,
            browsing, or otherwise using the
            Site, either manually or via an automated device or program, is a “User” for purposes of this Policy. This
            Policy also explains how we comply with applicable privacy statutes, rules, and regulations, including the
            General Data Protection Regulation
            (GDPR) and the California Consumer Privacy Act (CCPA), among others. This Policy sets forth how we handle
            personal information we collect (i) through our Site, (ii) when individuals engage with us or use our
            products or services (our “Services”),
            (iii) in connection with providing Services to our clients, (iv) in connection with discussing or
            corresponding with prospective clients about our Services, (v) information you share with us regarding you
            and/or business and (vi) from applicants
            for employment opportunities with us. For the purposes of this Notice, “personal information” means
            information relating to an identified or identifiable person.</p>
        <h2>User Consent to Policy</h2>
        <p>By accessing, browsing, or using a Site, or following links through a Site to apply for employment with ACA,
            each User acknowledges that he or she has read, understands, agrees, and consents to the terms and
            conditions of this Policy. Each User
            consents to the collection, use, and disclosure of his or her information, including personal information,
            non-personal information, and anonymous browsing information (“Information”), pursuant to the terms of this
            Policy. If you do not consent
            to these terms and conditions, you should not access, browse, or use any Site or provide any Information to
            ACA via any Site.</p>
        <h2>Information Collected by TotallyScience</h2>
        <h3>1. Personal Information</h3>
        <p>We may collect personal information directly from you, including through your use of our Site, when you
            contact us or request information from us, when you apply for an employment opportunity with us, or when you
            engage us for Services. With respect
            to personal information collected directly by us, including through our Site, we are the independent data
            controller responsible for your personal information. The information we collect directly from you typically
            consists of your contact
            information, including your name, email address and website address. We only use, disclose, or otherwise
            process personal information when we have a lawful basis for doing so under applicable law, including
            fulfilling our contractual obligations,
            complying with regulatory requests or legal obligations, protecting the vital interests of a person,
            furthering our legitimate interests as a company and employer, and otherwise for reasons you have consented
            to such processing. To the extent
            required by law, by providing personal information to us, you consent to our use of such personal
            information as explained herein. We also may obtain personal information indirectly from or on behalf of our
            users.</p>
        <h2>Accessing, Changing or Deleting Your Personal Information</h2>
        <p>TotallyScience allows you to make a request to correct inaccuracies in or make other changes or delete your
            Information by sending an email to <span style="color: var(--accent-color)">help@totallyscience.co</span>.
            We will use commercially
            reasonable efforts to promptly accommodate such requests.</p>
        <h2>Information Safeguarding</h2>
        <p>Totally Science will internally safeguard your nonpublic, personal information by restricting access to only
            those employees who provide products or services to you or those who need access to your information to
            service your account. In addition,
            we will maintain physical, electronic and procedural safeguards designed to comply with federal and/or state
            standards to guard your nonpublic, personal information, and we review and adjust these safeguards
            periodically in response to advances
            in technology and industry developments.</p>
        <h2>What You Can Do</h2>
        <p>If you become aware of any suspicious activity relating to your relationship with us, contact us immediately.
            If you have any questions relating to this privacy policy or concerns about the way in which we have handled
            information about you, please
            do not hesitate to send us an email at <span
                style="color: var(--accent-color)">contact@totallyscience.io</span>.</p>
        <h2>Use of Third-Party Service Providers</h2>
        <p>From time to time, we may obtain certain information from third-party internet Service Providers who may
            collect technical information, including but not limited to browser type, internet address, pages visited,
            IP address, or operating system,
            in an effort to assist us in evaluating our client’s online access to TotallyScience information.</p>
        <h2>We Will Keep You Informed</h2>
        <p>As required by federal law, we will notify you of our privacy policy annually and will do so on this page and
            through this document. We reserve the right to modify this policy at any time.</p>
    </div>

    <?php include "assets/includes/footer.php" ?>

    <script>
        window.addEventListener('load', async () => {
            let response = await fetcher(`/auth/check`);

            if (response.status == 200) {
                // display points count in navbar
                let json = await response.json();
                setPointsDisplay(json.points || 0, json.username || "");
            }
        });
    </script>
</body>

</html>