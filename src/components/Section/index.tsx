import { FC, HTMLAttributes } from "react";
import Image from "next/image";
import SectionHeader, { SectionHeaderProps } from "../SectionHeader";
import Images from "../Images";

interface SectionProps extends SectionHeaderProps {
  classSection?: HTMLAttributes<HTMLDivElement>["className"];
  descSection?: string;
  isReverse?: boolean;
}

const Section: FC<SectionProps> = ({
  title,
  desc,
  classSection,
  descSection,
  isReverse = false,
}) => {
  return (
    <div className={classSection}>
      <SectionHeader title={title} desc={desc} />

      <div
        className={`flex ${isReverse ? "flex-row-reverse" : ""} mt-20 gap-5`}
      >
        <div
          className="w-1/2"
          dangerouslySetInnerHTML={{ __html: descSection ?? "" }}
        />
        <div className="w-1/2">
          <Images
            w={"100%"}
            h={"640px"}
            alt={title ?? ""}
            src={"https://lauwang.vn/wp-content/uploads/2023/03/web.jpg"}
          />
        </div>
      </div>
    </div>
  );
};

export default Section;
