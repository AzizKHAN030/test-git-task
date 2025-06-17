/** @type {import('@scandipwa/magento-scripts').CMAConfiguration} */
module.exports = {
    magento: {
        first_name: "Scandiweb",
        last_name: "Developer",
        email: "developer@scandipwa.com",
        user: "admin",
        password: "scandipwa123",
        adminuri: "admin",
        mode: "developer",
        edition: "community",
    },
    configuration: {
        php: {
            env: {
                CONFIG__DEFAULT__CATALOG__SEARCH__ENGINE: "elasticsearch",
                CONFIG__DEFAULT__CATALOG__SEARCH__ELASTICSEARCH_SERVER_HOSTNAME:
                    "localhost",
                CONFIG__DEFAULT__CATALOG__SEARCH__ELASTICSEARCH_SERVER_PORT:
                    "9200",
                CONFIG__DEFAULT__CATALOG__SEARCH__ELASTICSEARCH_INDEX_PREFIX:
                    "magento2",
                CONFIG__DEFAULT__CATALOG__SEARCH__ELASTICSEARCH_ENABLE_AUTH: "0",
            },
        },
    },
};
