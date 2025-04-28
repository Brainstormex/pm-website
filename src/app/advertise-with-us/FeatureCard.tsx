export interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard = ({ icon, title, description }: FeatureCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-sm p-8 border border-inactiveGray">
      <div className="mb-6 text-4xl text-inkBlack">{icon}</div>
      <h3 className="text-xl font-medium mb-4 text-inkBlack">{title}</h3>
      <p className="text-inkBlack text-xs font-normal line-clamp-6">{description}</p>
    </div>
  );
};

export default FeatureCard;
