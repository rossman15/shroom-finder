import * as React from "react";
import Script from "next/script";
import Layout from "../src/components/layout/layout";
import { Flex } from "../src/components/presentational/flex";

export default function IndexPage() {
  return (
    <Layout>
      <Flex style={{ height: "100%" }} vertical>
        <h1>Welcome to Shroom Finder</h1>
        <div style={{ flexGrow: 1 }} id="map" />
      </Flex>
      <Script id="init-google-maps">
        {`
            var map;
            function initMap() {
              console.log("***MAP", document.getElementById('map'))
              map = new google.maps.Map(document.getElementById('map'), {
                center: {lat: -34.397, lng: 150.644},
                zoom: 8
              });
            }
          `}
      </Script>
      <Script
        src={`https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}&callback=initMap`}
        async
        defer
      ></Script>
    </Layout>
  );
}
