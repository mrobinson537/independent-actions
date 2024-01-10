// flex cards component
import classnames from 'classnames'
import Image from "next/image";

const FlexCards = ({myHobbies, bordered}) => {

  const parentClasses = classnames('flex-cards', {'flex-cards-bordered': bordered})

  return (
    <div className={parentClasses}>
      {myHobbies.map((item, x) => {
        return (
          <div className="flex-card" key={x}>
            {/*<img className="flex-card-img" src="https://picsum.photos/380/200"/>*/}
            <Image className={"flex-card-img"} src={item.imgPath} alt={item.name} width={380} height={200} />
            <h4 className="flex-card-title">{item.name}</h4>
            {/*<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore*/}
            {/*  et dolore magna aliqua.*/}
            {/*</p>*/}
          </div>
        )
      })}
    </div>
  )
}

export default FlexCards