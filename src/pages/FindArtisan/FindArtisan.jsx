import { useEffect, useState } from "react";

// react-helmet
import { Helmet } from "react-helmet";

// React router
import { useNavigate } from "react-router-dom";

// components
import FindArtisanHeader from "./components/FindArtisanHeader/FindArtisanHeader";
import FindArtisanSearch from "./components/FindArtisanSearch/FindArtisanSearch";
import FindArtisanStat from "./components/FindArtisanStat/FindArtisanStat";
import FindArtisanContent from "./components/FindArtisanContent/FindArtisanContent";

const FindArtisan = () => {
  const [search,setSearch] = useState("");
  const navigate = useNavigate();
  const token = localStorage.getItem("jwtToken");
  console.log(token);

  useEffect(() => {
    if (!token) {
      // navigation to find artisan page
      navigate("/login");
    }
  }, [token, navigate]);
  return (
    <>
      {/* React Helmet */}
      <Helmet>
        {/* Basic Meta Tags */}
        <title>Search For Artisans | WorkMan</title>
        <meta
          name="description"
          content="WorkMan is my final year project at the University of Port Harcourt. It is a website that connects users to artisans residing at Choba area."
        />
        <meta
          name="keywords"
          content="artisan, craftsmen, handmade, custom-made, traditional crafts, unique art, bespoke, handcrafted goods, artisanal products, local artisans, craftsmanship, handmade jewelry, handmade furniture, artisan marketplace, artisan community, creative artisans, artisanal services"
        />

        <meta name="author" content="Agu Henry" />

        {/* Open Graph Meta Tags (for social media sharing) */}
        <meta property="og:title" content="Search For Artisans | WorkMan" />
        <meta
          property="og:description"
          content="WorkMan is my final year project at the University of Port Harcourt. It is a website that connects users to artisans residing at Choba area."
        />
        <meta property="og:image" content="./assets/OG-image.svg" />
        <meta property="og:url" content="https://workman-six.vercel.app/" />

        {/* Twitter Meta Tags (for Twitter Cards) */}
        <meta name="twitter:card" content="./assets/OG-image.svg" />
        <meta name="twitter:title" content="Search For Artisans | WorkMan" />
        <meta
          name="twitter:description"
          content="WorkMan is my final year project at the University of Port Harcourt. It is a website that connects users to artisans residing at Choba area."
        />
        <meta name="twitter:image" content="./assets/OG-image.svg" />
      </Helmet>
      <div style={{ width: "90%", margin: "30px auto" }}>
        <FindArtisanHeader />
        <FindArtisanSearch search={search} setSearch={setSearch}/>
        <FindArtisanStat />
        <FindArtisanContent search={search} setSearch={setSearch}/>
      </div>
    </>
  );
};

export default FindArtisan;
