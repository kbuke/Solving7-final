import { Buttons } from "./Buttons"

export function Tables({
    tableHeadings,
    dataArray,
    setTableAction,
    setSelectedCategoryId,
    setSelectedCategoryName,
    setPostOrPatch
}){
    const noOfHeaders = tableHeadings?.length

    return(
        <table className="w-full mt-10">
            <thead>
                <tr className={`bg-black text-white w-[1/(${noOfHeaders + 1}])`}>
                    {tableHeadings?.map((heading, index) => (
                        <th key={index}>
                            {heading.header}
                        </th>
                    ))}
                </tr>
            </thead>

            <tbody 
                className="justify-center items-center p-10"
            >
                {dataArray?.map((data, index) => (
                    <tr
                        key={index}
                    >
                        {tableHeadings.map((heading, index) => (
                            <td key={index} className="text-center">
                                {heading.render
                                    ? heading.render(data[heading.accessor], data)
                                    : data[heading.accessor]
                                }
                            </td>
                        ))}

                        <div
                            className="flex justify-center items-center gap-3"
                        >
                            <Buttons 
                                text="Edit"
                                buttonType="Edit"
                                setState={setTableAction}
                                categoryId={data?.id}
                                setCategoryId={setSelectedCategoryId}
                            />

                            <Buttons 
                                text="Delete"
                                buttonType={"Delete"}
                                setState={setTableAction}
                                categoryId={data?.id}
                                setCategoryId={setSelectedCategoryId}
                            />
                        </div>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}