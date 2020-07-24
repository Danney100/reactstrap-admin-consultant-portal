import React from 'react'

import {Container, Row, CardColumns, Col} from 'components'
import {HeaderMain} from 'routes/components/HeaderMain'
import {ImagesResultsCard} from 'routes/components/SearchResults/ImagesResultsCard'
import {Paginations} from 'routes/components/Paginations'

const ImagesResults = () => (
  <React.Fragment>
    <Container>
      <HeaderMain title="Video Results" className="mb-5 mt-4" />
      {/* START Content */}
      <Row>
        <Col lg={12}>
          <CardColumns>
            <ImagesResultsCard />
            <ImagesResultsCard />
            <ImagesResultsCard />
            <ImagesResultsCard />
            <ImagesResultsCard />
            <ImagesResultsCard />
          </CardColumns>
          <div className="d-flex justify-content-center">
            <Paginations />
          </div>
        </Col>
      </Row>
      {/* END Content */}
    </Container>
  </React.Fragment>
)

export default ImagesResults
