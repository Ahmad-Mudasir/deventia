const InfoCard = ({
  icon: Icon,
  title,
  subtitle,
  bgColor,
  iconColor,
}: {
  icon: React.ElementType;
  title: string;
  subtitle: string;
  bgColor: string;
  iconColor: string;
}) => {
  return (
    <div className="flex gap-4 w-fit">
      <div
        style={{ backgroundColor: bgColor, color: iconColor }}
        className={`p-4 w-fit h-full`}
      >
        <Icon />
      </div>
      <div className="flex gap-2 flex-col">
        <h4 className="font-bold text-base text-[#D0D0D0]">{title}</h4>
        <p className="text-xs text-[#535768]">{subtitle}</p>
      </div>
    </div>
  );
};

export default InfoCard;
