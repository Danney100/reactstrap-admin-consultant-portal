import React from 'react'
import PropTypes from 'prop-types'
import map from 'lodash/map'
import {DragDropContext, Droppable, Draggable} from 'react-beautiful-dnd'
import classNames from 'classnames'

import {Table, Button, Card, CardHeader} from 'components'
import classes from './common.scss'
import {Input, Col, Row} from 'reactstrap'

const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list)
  const [removed] = result.splice(startIndex, 1)
  result.splice(endIndex, 0, removed)

  return result
}

const getTableClass = (isDraggedOver) =>
  classNames(classes['table'], {
    [classes['table--drag-over']]: isDraggedOver,
  })

const getRowClass = (isDragging) =>
  classNames(classes['row'], {
    [classes['row--dragging']]: isDragging,
  })

// Custom Table Cell - keeps cell width when the row
// is detached from the table
// ========================================================
class TableCell extends React.Component {
  static propTypes = {
    children: PropTypes.node,
    isDragOccurring: PropTypes.bool,
  }

  ref = React.createRef()

  getSnapshotBeforeUpdate(prevProps) {
    if (!this.ref) {
      return null
    }
    const ref = this.ref.current

    const isDragStarting = this.props.isDragOccurring && !prevProps.isDragOccurring

    if (!isDragStarting) {
      return null
    }

    const {width, height} = ref.getBoundingClientRect()

    const snapshot = {width, height}

    return snapshot
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (!this.ref) {
      return
    }
    const ref = this.ref.current

    if (snapshot) {
      if (ref.style.width === snapshot.width) {
        return
      }
      ref.style.width = `${snapshot.width}px`
      ref.style.height = `${snapshot.height}px`
      return
    }

    if (this.props.isDragOccurring) {
      return
    }

    // inline styles not applied
    if (ref.style.width == null) {
      return
    }

    // no snapshot and drag is finished - clear the inline styles
    ref.style.removeProperty('height')
    ref.style.removeProperty('width')
  }

  render() {
    // eslint-disable-next-line no-unused-vars
    const {children, isDragOccurring, ...otherProps} = this.props
    return (
      <td ref={this.ref} {...otherProps}>
        {children}
      </td>
    )
  }
}

// Draggable Table Row
// ========================================================
const DraggableRow = (props) => (
  <Draggable draggableId={props.id} index={props.index}>
    {(provided, snapshot) => (
      <tr
        ref={provided.innerRef}
        {...provided.draggableProps}
        className={getRowClass(snapshot.isDragging)}>
        <TableCell
          className="align-middle text-center"
          isDragOccurring={snapshot.isDragging}
          {...provided.dragHandleProps}>
          <i className="fa fa-ellipsis-v fa-lg d-block mx-auto text-black" />
        </TableCell>
        <TableCell className="align-middle text-center" isDragOccurring={snapshot.isDragging}>
          <Input
            type="checkbox"
            className="m-0"
            style={{position: 'relative'}}
            defaultChecked={props.enabled}
          />
        </TableCell>
        <TableCell className="align-middle" isDragOccurring={snapshot.isDragging}>
          <span className="mt-0 mb-1">{props.name}</span>
        </TableCell>
        <TableCell className="align-middle" isDragOccurring={snapshot.isDragging}>
          <span className="mt-0 mb-1">{props.description}</span>
        </TableCell>
        <TableCell className="align-middle" isDragOccurring={snapshot.isDragging}>
          <span>{props.consultantType}</span>
        </TableCell>
        <TableCell className="align-middle" isDragOccurring={snapshot.isDragging}>
          <span>{props.consultantRankType}</span>
        </TableCell>
        <TableCell className="align-middle" isDragOccurring={snapshot.isDragging}>
          <span>{props.consultantStatus}</span>
        </TableCell>
        <TableCell className="align-middle" isDragOccurring={snapshot.isDragging}>
          <span>{props.personalWebsite}</span>
        </TableCell>
        <TableCell className="align-middle" isDragOccurring={snapshot.isDragging}>
          <span>{props.portalAccess}</span>
        </TableCell>
        <TableCell className="align-middle" isDragOccurring={snapshot.isDragging}>
          <span>{props.hasSubscriptions}</span>
        </TableCell>
        <TableCell isDragOccurring={snapshot.isDragging}>
          <Row>
            <Button className="mr-2 bg-danger border-danger mb-1" size="sm" onClick={() => {}}>
              <i className="fa fa-fw fa-trash" aria-hidden="true" />
              Delete
            </Button>
            <Button className="mr-2 bg-success border-success mb-1" size="sm">
              <i className="fa fa-fw fa-pencil" aria-hidden="true" />
              Edit
            </Button>
            <Button className="mr-2 bg-info border-info mb-1" size="sm">
              <i className="fa fa-fw fa-sort" aria-hidden="true" />
              sort
            </Button>
          </Row>
        </TableCell>
      </tr>
    )}
  </Draggable>
)

DraggableRow.propTypes = {
  id: PropTypes.number.isRequired,
  enabled: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  consultantType: PropTypes.string.isRequired,
  consultantRankType: PropTypes.string.isRequired,
  consultantStatus: PropTypes.string.isRequired,
  personalWebsite: PropTypes.string.isRequired,
  portalAccess: PropTypes.string.isRequired,
  hasSubscriptions: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
}

// Demo Component
// ========================================================
const initialState = [
  {
    id: 1,
    enabled: true,
    name: 'Join w/Annual Site Fee',
    description: 'Join with Annual Fee for Website',
    consultantType: 'Consultant',
    consultantRankType: 'Consultant',
    consultantStatus: 'Active',
    personalWebsite: 'Yes',
    portalAccess: 'Yes',
    hasSubscriptions: 'Yes',
  },
  {
    id: 2,
    enabled: false,
    name: '4 Bottle Wine Club',
    description: 'Join 4 Bottle Wine Club',
    consultantType: 'Circle Consultant',
    consultantRankType: 'Consultant',
    consultantStatus: 'Active',
    personalWebsite: 'No',
    portalAccess: 'Yes',
    hasSubscriptions: 'Yes',
  },
  {
    id: 3,
    enabled: false,
    name: '4 Bottle Club',
    description: 'Join 4 Bottle Wine Club',
    consultantType: 'Circle Consultant',
    consultantRankType: 'Consultant',
    consultantStatus: 'Active',
    personalWebsite: 'No',
    portalAccess: 'Yes',
    hasSubscriptions: 'No',
  },
]

export class JoinOptionTable extends React.Component {
  static propTypes = {
    className: PropTypes.string,
  }

  state = {
    data: initialState,
  }

  constructor(props) {
    super(props)

    this.onDragEnd = this.onDragEnd.bind(this)
  }

  onDragEnd({source, destination}) {
    if (!destination) {
      return
    }

    const data = reorder(this.state.data, source.index, destination.index)
    this.setState({data})
  }

  recoverInitialState() {
    this.setState({
      data: initialState,
    })
  }

  render() {
    return (
      <Card className="mt-3">
        <CardHeader className="bg-none bb-0">
          <Row className="justify-content-end">
            <Col lg={3}>
              <Input type="search" placeholder="Search" />
            </Col>
          </Row>
        </CardHeader>
        <DragDropContext onDragEnd={this.onDragEnd}>
          <Table className="mb-0 text-black" striped responsive>
            <thead className="border-top border-bottom">
              <tr>
                <th className="bt-0 text-black"></th>
                <th className="bt-0 text-black">Enabled</th>
                <th className="bt-0 text-black">Name</th>
                <th className="bt-0 text-black">Description</th>
                <th className="bt-0 text-black">Consultant Type</th>
                <th className="bt-0 text-black">Consultant Rank Type</th>
                <th className="bt-0 text-black">Consultant Status</th>
                <th className="bt-0 text-black">Personal Website</th>
                <th className="bt-0 text-black">Portal Access</th>
                <th className="bt-0 text-black">Has Subscriptions</th>
                <th className="bt-0 text-black"></th>
              </tr>
            </thead>
            <Droppable droppableId="table">
              {(provided, snapshot) => (
                <tbody
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                  className={`${getTableClass(snapshot.isDraggingOver)}`}>
                  {map(this.state.data, (item, index) => (
                    <DraggableRow key={item.id} index={index} {...item} />
                  ))}
                </tbody>
              )}
            </Droppable>
          </Table>
        </DragDropContext>
      </Card>
    )
  }
}
