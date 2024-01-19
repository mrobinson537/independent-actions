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
            <Image className={"flex-card-img"} src={item.imgPath} alt={item.name} width={380} height={200} />
            <h4 className="flex-card-title">{item.name}</h4>
          </div>
        )
      })}
    </div>
  )
}

export default FlexCards