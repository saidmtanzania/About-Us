module.exports = (app, renderLayout) => {
    app.get("/about-us", (req, res) => {
        const content = `
            <h1>About Us</h1>
            <button onclick="load()">Load Data</button>
            <div id="result" style="margin-top:20px;"></div>
            
            <script>
                async function load() {
                    try {
                        const res = await fetch('/api/about-us');
                        const data = await res.json();

                        document.getElementById("result").innerHTML =
                        "<pre>" + JSON.stringify(data, null, 2) + "</pre>";

                    } catch (err) {
                        document.getElementById("result").innerText =
                        "Error loading data";
                    }
                }
            </script>
        `;
        res.send(renderLayout(content));
    });

    app.get("/api/about-us", (req, res) => {
        res.json({
            message: "About Us endpoint"
        });
    });
};