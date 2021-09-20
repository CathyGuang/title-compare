const handler = async(req, res) => {
    const { userId } = req.query;
    const data = await fetch(
        ``
        // Put Api here! Substitute the variable with variable name ${userId}.
    );

    const temp = await data.json();

    res.json(temp);

};
export default handler;