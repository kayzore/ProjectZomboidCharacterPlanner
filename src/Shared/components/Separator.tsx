import clsx from "clsx";

type SeparatorOrientation = 'Horizontal' | 'Vertical';
type SeparatorProps = {
  orientation?: SeparatorOrientation
} & React.HTMLAttributes<HTMLDivElement>

const Separator: React.FunctionComponent<SeparatorProps> = (props: SeparatorProps) => {
  const { orientation = 'Horizontal', className, ...otherProps } = props;
  const classNames: string = clsx({
    'border-b h-[1px] my-3': orientation == 'Horizontal',
    'border-r w-[1px] mx-3': orientation == 'Vertical'
  }, className);

  return (
    <div className={classNames} {...otherProps} />
  );
};

export default Separator;
