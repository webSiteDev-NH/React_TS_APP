import { Props } from './Type';

export const ObjProps = (props: Props) => {
  return(
    <>
      <div>{props.title}です</div>
      <div>{props.num}です</div>
    </>
  )
}
