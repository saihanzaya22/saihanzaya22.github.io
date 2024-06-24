body {
    font-family: Arial, sans-serif;
    background-color: #000;
    color: #fff;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.banner {
    background-color: #333;
    width: 100%;
    text-align: center;
    padding: 50px;
    position: fixed;
    top: 0;
}

.content {
    margin-top: 200px;
    text-align: center;
}

.photos {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}

.photos img {
    width: 150px;
    height: 150px;
    margin: 10px;
    border: 2px solid #fff;
}

.choices button {
    background-color: #444;
    color: #fff;
    border: none;
    padding: 10px 20px;
    margin: 10px;
    cursor: pointer;
}

.choices button:hover {
    background-color: #555;
}

.gift {
    display: none;
    margin-top: 20px;
}

video {
    width: 100%;
    max-width: 600px;
    margin-top: 20px;
}