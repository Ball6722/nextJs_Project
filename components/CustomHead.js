// components/CustomHead.js

import Head from "next/head";

const CustomHead = () => {
  return (
    <Head>
      {/* Meta tags */}
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      {/* Include additional stylesheets or custom styles */}
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,400i,700&display=fallback"
      />
      {/* Font Awesome Icons */}
      <link rel="stylesheet" href="/plugins/fontawesome-free/css/all.min.css" />
      {/* IonIcons */}
      <link
        rel="stylesheet"
        href="https://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css"
      />
      {/* Theme style */}
      <link rel="stylesheet" href="/dist/css/adminlte.min.css" />

      {/* <!-- DataTables --> */}
      <link href="https://cdn.datatables.net/responsive/2.5.0/css/responsive.jqueryui.min.css" />

      <script src="https://cdnjs.cloudflare.com/ajax/libs/admin-lte/3.2.0/js/adminlte.min.js"></script>
      <script src="/plugins/jquery/jquery.min.js"></script>
      <script src="/plugins/bootstrap/js/bootstrap.bundle.min.js"></script>

      {/* Page title */}
      <title>Clinic App</title>

      {/* Add other head elements here */}
    </Head>
  );
};

export default CustomHead;
