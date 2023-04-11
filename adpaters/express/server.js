const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const rolRoutes = require('./routes/rolRoutes');
const userRoutes = require('./routes/userRoutes');
const articleRoutes = require('./routes/articleRoutes');
const productRoutes = require('./routes/productRoutes');
const providerRoutes = require('./routes/providerRoutes');
const ticketRoutes = require('./routes/ticketRoutes');
const typePayRoutes = require('./routes/typePayRoutes');
const typeUserRoutes = require('./routes/typeUserRoutes');
const traceabilityRoutes = require('./routes/traceabilityRoutes');
const familyRoutes = require('./routes/familyRoutes');
const app = express();
const cors = require('cors');

const corsOptions ={
    origin:'http://localhost:4000',
    credential:true
}

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(morgan("dev"));
app.use(cors(corsOptions));
app.use("/api/v1", rolRoutes);
app.use("/api/v1", userRoutes);
app.use("/api/v1", articleRoutes);
app.use("/api/v1", productRoutes);
app.use("/api/v1", providerRoutes);
app.use("/api/v1", ticketRoutes);
app.use("/api/v1", typePayRoutes);
app.use("/api/v1", typeUserRoutes);
app.use("/api/v1", traceabilityRoutes);
app.use("/api/v1", familyRoutes);

module.exports = app;