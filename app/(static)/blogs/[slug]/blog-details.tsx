import { PortableText } from "next-sanity";
import Image from "next/image";
import urlBuilder from "@sanity/image-url";
import config from "@/sanity/config/client-config";
import { urlFor } from "@/sanity/lib/image";
function BlogDetails({ data }: any) {
  const { title, body, mainImage, publishedAt } = data;
  const ImageComponent = ({ value }: any) => {
    return (
      <div className="my-10 overflow-hidden rounded-[15px]">
        <Image
          src={
            urlBuilder(config)
              .image(value)
              .fit("max")
              .auto("format")
              .url() as string
          }
          width={400}
          height={400}
          alt={value.alt || "blog image"}
          loading="lazy"
        />
      </div>
    );
  };
  const components = {
    types: {
      image: ImageComponent,
    },
  };
  console.log(mainImage?.asset?._ref);
  let published = new Date(publishedAt);
  return (
    <div className="bg-white p-6  max-w-3xl mx-auto my-5">
      <Image
        src={urlFor(
          mainImage ? mainImage : "image-Tb9Ew8CXIwaY6R1kjMvI0uRR-2000x3000-jpg"
        )
          .fit("max")
          .auto("format")
          .url()}
        width={400}
        height={200}
        alt="blog image"
        loading="lazy"
        className="w-full h-[120px] lg:h-[220px] object-cover"
      />
      <div className="flex justify-between items-center my-4">
        <span className="text-xs text-orange-500 font-semibold bg-orange-100 py-1 px-2 rounded">
          News
        </span>
        <span className="text-xs text-gray-600">
          {published.toDateString()}
        </span>
      </div>

      <h1 className="text-3xl font-bold text-gray-800 mb-4">{title}</h1>
      <p className="text-gray-600 mb-6">{}</p>

      <div className="text-gray-800">
        <PortableText value={body} />
        {/* <h3 className="text-xl font-semibold mb-2">What is Brand Identity?</h3>
        <p className="mb-4">
          Brand identity is the collection of all brand elements that a company
          creates to portray the right image to its consumer. This includes
          everything from your logo, typography, colors, and packaging, to your
          messaging, values, and customer experience. A strong brand identity
          helps you stand out from the competition and creates a lasting
          impression in the minds of your audience.
        </p>

        <h3 className="text-xl font-semibold mb-2">
          The Importance of Brand Identity
        </h3>
        <p className="mb-4">A well-defined brand identity:</p>
        <ul className="list-disc list-inside space-y-2 mb-4">
          <li>
            Differentiates Your Business: It sets you apart in a crowded market.
          </li>
          <li>
            Builds Customer Loyalty: Consistent branding fosters trust and
            loyalty.
          </li>
          <li>
            Communicates Your Values: It conveys what your business stands for.
          </li>
          <li>
            Creates Emotional Connections: Strong branding can evoke emotions,
            leading to deeper connections with your audience.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mb-4">
          Crafting Your Brand Identity
        </h2>
        <h3 className="text-xl font-semibold mb-2">
          Defining Your Brand Purpose
        </h3>
        <p className="mb-4">
          Your brand purpose is the reason your business exists beyond making a
          profit. It's the "why" behind everything you do. Defining this purpose
          helps in creating a brand identity that resonates with your audience.
        </p>

        <h3 className="text-xl font-semibold mb-2">
          Identifying Your Target Audience
        </h3>
        <p className="mb-4">
          Understanding who your audience is, what they need, and how they
          perceive the world is crucial in shaping your brand identity. Create
          detailed buyer personas to guide your branding efforts.
        </p> */}
      </div>
    </div>
  );
}

export default BlogDetails;
