type DecorativeDividerSize = "compact" | "default" | "large";

interface DecorativeDividerProps {
  size?: DecorativeDividerSize;
  className?: string;
}

const DecorativeDivider = ({
  size = "default",
  className = "",
}: DecorativeDividerProps) => {
  return (
    <div
      className={`decorative-divider decorative-divider--${size} ${className}`}
      aria-hidden="true"
    >
      <span className="decorative-divider__line decorative-divider__line--left" />

      <span className="decorative-divider__ornament">
        <img
          src="/assets/icons/cross.svg"
          alt=""
          className="decorative-divider__cross"
        />
      </span>

      <span className="decorative-divider__line decorative-divider__line--right" />
    </div>
  );
};

export default DecorativeDivider;
