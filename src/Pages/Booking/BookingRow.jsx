

const BookingRow = ({booking}) => {
    const {  date, service, price, img, } = booking;
    return (
        <tr>
       
        <td>
            <div className="avatar">
                <div className="rounded w-24 h-24">
                    {img && <img src={img} alt="Avatar Tailwind CSS Component" />}
                </div>
            </div>
        </td>
        <td>
            {service}
        </td>
        <td>{date}</td>
        <td>${price}</td>
     
    </tr>
    );
};

export default BookingRow;