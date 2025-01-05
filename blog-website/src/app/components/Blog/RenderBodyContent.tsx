import config from "@/sanity/config/client-config";
import { Blog } from '@/types/blog'
import { PortableText } from "@portabletext/react";
import { getImageDimensions } from "@sanity/asset-utils";
import urlBuilder from "@sanity/image-url";
import Image from "next/image";

// lazy-loaded image component
const ImageComponent = ({ value, isInline }: any) => {
  const { width, height } = getImageDimensions(value);
  return (
    <div className="my-10 overflow-hidden rounded-lg shadow-lg ">
      <Image
        src={
          urlBuilder(config)
            .image(value)
            .fit("max")
            .auto("format")
            .url() as string
        }
        width={width}
        height={height}
        alt={value.alt || "blog image"}
        loading="lazy"
        className="w-full h-auto object-cover transition-transform duration-300 hover:scale-105  "
        style={{
          display: isInline ? "inline-block" : "block",
          aspectRatio: width / height,
        }}
      />
    </div>
  );
};

const components = {
  types: {
    image: ImageComponent,
  },
};

const RenderBodyContent = ({ post }: { post: Blog }) => {
  return (
    <>
      <div className=" max-w-4xl mx-auto px-4 py-8 bg-white rounded-lg  shadow-md prose prose-lg text-gray-800 leading-7">
      <PortableText
       value={post?.body as any} components={components} 
      />
      
      </div>
    </>
  );
};

export default RenderBodyContent;