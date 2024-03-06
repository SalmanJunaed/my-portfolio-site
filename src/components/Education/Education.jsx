

const Education = () => {
    return (
        <section id="education" className="my-8 py-6 bg-slate-700">
            <h1 className="text-4xl underline uppercase text-white text-center font-bold py-4">
                Education
            </h1>
            <div className="overflow-x-auto text-white mx-16">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th className="text-white text-xl">Certification</th>
                            <th className="text-white text-xl">From where</th>
                        </tr>
                    </thead>
                    <tbody className="text-lg">
                      {/* row 1 */}
                        <tr>
                            <th>1</th>
                            <td>B.Sc. in Computer Science and Engineering</td>
                            <td>American International University - Bangladesh (AIUB)</td>
                        </tr>
                      {/* row 2 */}
                        <tr>
                            <th>2</th>
                            <td>Higher Secondary Certificate</td>
                            <td>Chittagong Board</td>
                        </tr>
                      {/* row 3 */}
                        <tr>
                            <th>3</th>
                            <td>Secondary School Certificate</td>
                            <td>Chittagong Board</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </section>
    );
};

export default Education;