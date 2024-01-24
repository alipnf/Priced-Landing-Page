import Card from "../Fragments/card";
import Feature from "../Elements/feature";
const CardLayout = () => {
  return (
    <div className="mb-24 flex justify-between gap-8">
      <Card
        title="Basic"
        price="$5"
        description="A budget-friendly option for individuals and small businesses."
        border="rounded-l-[20px]"
      >
        <Feature text="10 GB storage" icon="check"></Feature>
        <Feature text="Basic file collaboration" icon="check"></Feature>
        <Feature text="Mobile app access" icon="check"></Feature>
        <Feature
          text="File synchronization across devices"
          icon="check"
        ></Feature>
        <Feature text="Support for common file types" icon="check"></Feature>
        <Feature text="Automatic file backup" icon="cross"></Feature>
        <Feature text="Advanced security features" icon="cross"></Feature>
      </Card>

      <Card
        title="Professional"
        price="$15"
        description="A comprehensive option for businesses with more advanced needs."
        recomended={true}
      >
        <Feature text="100 GB storage" icon="check"></Feature>
        <Feature text="Advanced file collaboration" icon="check"></Feature>
        <Feature text="Mobile app access" icon="check"></Feature>
        <Feature
          text="File synchronization across devices"
          icon="check"
        ></Feature>
        <Feature text="Support for common file types" icon="check"></Feature>
        <Feature text="Automatic file backup" icon="check"></Feature>
        <Feature text="Advanced security features" icon="check"></Feature>
        <Feature text="Purchase additional features" icon="check"></Feature>
      </Card>

      <Card
        title="Enterprise"
        price="Custom"
        description="A customizable plan for large organizations with specific needs."
        border="rounded-r-[20px]"
      >
        <Feature text="Customizable storage capacity" icon="check"></Feature>
        <Feature text="Advanced file collaboration" icon="check"></Feature>
        <Feature text="Mobile app access" icon="check"></Feature>
        <Feature
          text="File synchronization across devices"
          icon="check"
        ></Feature>
        <Feature text="Support for common file types" icon="check"></Feature>
        <Feature text="Automatic file backup" icon="check"></Feature>
        <Feature text="Advanced security features" icon="check"></Feature>
        <Feature text="Customizable features" icon="check"></Feature>
        <Feature text="Purchase additional features" icon="check"></Feature>
      </Card>
    </div>
  );
};

export default CardLayout;
