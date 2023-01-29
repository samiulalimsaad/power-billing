const Bill = () => {
    return (
        <tr>
            <th>1</th>
            <td>Cy Ganderton</td>
            <td>Quality Control Specialist</td>
            <td>Littel, Schaden and Vandervort</td>
            <td>Canada</td>
            <td className="flex items-center  gap-2">
                <button className="btn btn-warning btn-sm">Edit</button>
                <div className="divider-vertical"></div>
                <button className="btn btn-error btn-sm">delete</button>
            </td>
        </tr>
    );
};

export default Bill;
