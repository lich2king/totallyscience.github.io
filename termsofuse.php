<!DOCTYPE html>
<html lang="en">

<head>
    <title>Terms Of Use - Definitely Science - Free Online Unblocked Games</title>
    <?php include "assets/includes/head.php" ?>

    <style>
    #termsText p {
        color: white;
        padding-right: 2vw;
        padding-left: 2vw;
        font-size: 20px;
    }

    #termsText h1 {
        color: white;
        text-align: center;
    }

    #termsText h2 {
        color: white;
        text-align: center;
    }

    #termsText {
        margin-top: 120px;
        margin-bottom: 120px;
    }
    </style>
</head>

<body>
    <?php include "assets/includes/navbar.php" ?>

    <div id="termsText">
        <h1>Terms of Use</h1>
        <h2>General Terms of Use for DefinitelyScience's Content</h2>
        <p>By accessing or using the site, you agree to be bound by this agreement and the terms of our privacy policy
            at https://definitelyscience.com/privacypolicy which are incorporated by this reference. This agreement
            shall remain in full force and effect while
            you use any of the DefinitelyScience family of sites.</p>
        <p>DO NOT USE THIS SITE WHEN YOU ARE IN A CLASS SESSION. THIS SITE SHOULD BE ACCESSED AND ENJOYED DURING BREAK
            PERIODS OR WHEN NOT IN SCHOOL.</p>
        <p>DefinitelyScience.com LLC does not guarantee the accuracy of any information included in any of our family of
            sites, nor do we guarantee the accuracy of the information included in any of the sites we link to.</p>
        <p>The information included in our family of sites is meant to supplement standard academic courses and
            classroom instruction.</p>
        <p>We are not responsible for any of the content included in any of our licensed content that is authored by
            people not employed by Totallyscience.co LLC, such as our games at DefinitelyScience.co.</p>
        <p>DefinitelyScience is not responsible for any ads that may appear on our sites via error or malware viruses.</p>
        <p>Materials on this site, as well as the organization and layout of the site may not be copied, modified,
            distributed, transferred, decompiled, reverse assembled, disassembled, or otherwise reverse engineered in
            whole or in part.</p>
        <p>YOUR USE OF THE DefinitelyScience FAMILY OF SITES IS ON AN "AS IS," "AS AVAILABLE" BASIS, AND WE SPECIFICALLY
            DISCLAIM ANY REPRESENTATIONS OR WARRANTIES, EXPRESS OR IMPLIED, INCLUDING, WITHOUT LIMITATION, ANY
            REPRESENTATIONS OR WARRANTIES OF MERCHANTABILITY
            OR FITNESS FOR A PARTICULAR PURPOSE. WE DO NOT WARRANT THAT THE SERVICE WILL BE UNINTERRUPTED OR ERROR FREE
            OR FREE FROM VIRUSES OR OTHER HARMFUL MALICIOUS AGENTS. TO THE FULLEST EXTENT PERMITTED BY LAW, IN NO EVENT
            AND UNDER NO LEGAL THEORY,
            WHETHER TORT (INCLUDING NEGLIGENCE), CONTRACT OR OTHERWISE, SHALL DefinitelyScience, ITS AFFILIATES, AND ITS
            AND THEIR RESPECTIVE SHAREHOLDERS, DIRECTORS, OFFICERS, EMPLOYEES, ADVERTISERS, SUPPLIERS, CONTENT PROVIDERS
            AND LICENSORS (COLLECTIVELY,
            THE “DefinitelyScience PARTIES”) BE LIABLE (JOINTLY OR SEVERALLY) TO YOU OR ANY OTHER PERSON AS A RESULT OF
            YOUR USE OF THE DefinitelyScience FAMILY OF SITES FOR INDIRECT, CONSEQUENTIAL, SPECIAL, INCIDENTAL, EXEMPLARY
            OR PUNITIVE DAMAGES, EVEN IF ADVISED
            OF THE POSSIBILITY OF SUCH DAMAGES. WHERE WE ARE NOT LEGALLY ENTITLED TO EXCLUDE ALL LIABILITY, OUR TOTAL
            LIABILITY FOR ANY LOSS OR DAMAGE RELATING TO THE DefinitelyScience FAMILY OF SITES SHALL NOT EXCEED AN AMOUNT
            EQUAL TO THE SUBSCRIPTION FEES (IF
            ANY) PAID BY YOU TO US. Your sole and exclusive remedy under this Agreement is as expressly set forth
            herein. Some jurisdictions do not allow the exclusion or limitation of implied warranties, so the above
            exclusions or limitations may not
            apply to you.</p>
        <p>You agree to use the DefinitelyScience family of sites in compliance with all applicable laws, regulations and
            rulings. We reserve the right to terminate or restrict your access to the DefinitelyScience sites in our sole
            discretion if we believe you are using
            a site in a way that violates these Terms of Use or infringes upon another person’s rights.</p>
        <p>To the fullest extent of the law, you agree to indemnify and hold the DefinitelyScience Parties harmless from
            any claim, demand, or damage, including costs and reasonable attorneys' fees, asserted by any third party
            due to or arising out of your
            use of the DefinitelyScience family of sites.</p>
        <p>Irrespective of the residence of any user, these Terms of Use shall be governed by New York law excluding its
            conflicts of law principles. Except for claims related to intellectual property and disputes that qualify
            for small claims court, any
            dispute that arises shall be resolved by arbitration administered by the American Arbitration Association
            (“AAA”) in accordance with its Commercial Arbitration Rules and the Supplementary Procedures for Consumer
            Related Disputes, in New York,
            New York. NO CLASS ACTION MAY BE PURSUED OR MAINTAINED WITH RESPECT TO ANY DISPUTE REGARDING THESE TERMS OF
            USE.</p>
        <p>We administer the DefinitelyScience family of sites from the United States of America. If you choose to access
            the DefinitelyScience sites from outside the United States, you consent to the transfer of information outside
            of your country of residence
            to the United States of America.</p>
        <p>Note: This document is subject to change at any time. When it does, the changes will be posted on this page.
            Your continued use of the DefinitelyScience family of sites indicates that you accept the terms spelled out in
            this document.</p>
        <p>DMCA Requests: If there are any requests to take down content you own, please email <span
                style="color: var(--accent-color)">contact@totallyscience.io</span></p>
    </div>



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

    <?php include "assets/includes/footer.php" ?>
</body>

</html>