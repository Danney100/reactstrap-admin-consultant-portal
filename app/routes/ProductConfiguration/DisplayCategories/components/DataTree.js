import React, {useState} from 'react'
import {makeStyles} from '@material-ui/core/styles'
import TreeView from '@material-ui/lab/TreeView'
import TreeItem from '@material-ui/lab/TreeItem'

const productData = {
  id: '1',
  name: 'All Products',
  children: [
    {
      id: '2',
      name: 'Business Kit',
    },
    {
      id: '3',
      name: 'Wine Clubs',
    },
    {
      id: '4',
      name: 'Wine',
      children: [
        {
          id: '5',
          name: 'Gift Sets',
        },
        {
          id: '6',
          name: 'Middle Jane',
        },
        {
          id: '7',
          name: 'CANS',
        },
        {
          id: '8',
          name: 'Sparkling',
        },
        {
          id: '9',
          name: 'White',
          children: [
            {
              id: '10',
              name: 'Fruity White',
            },
            {
              id: '11',
              name: 'Earthy White',
            },
            {
              id: '12',
              name: 'Creamy',
            },
            {
              id: '13',
              name: 'Crisp',
            },
          ],
        },
        {
          id: '14',
          name: 'Rosé',
        },
        {
          id: '15',
          name: 'Red',
          children: [
            {
              id: '16',
              name: 'Fruity Red',
            },
            {
              id: '17',
              name: 'Earthy Red',
            },
            {
              id: '18',
              name: 'Bold',
            },
            {
              id: '19',
              name: 'Light',
            },
          ],
        },
      ],
    },
  ],
}

const merchData = {
  id: '20',
  name: 'Merch',
  children: [
    {
      id: '21',
      name: 'Wearables',
    },
    {
      id: '22',
      name: 'Drinkware',
    },
    {
      id: '23',
      name: 'Entertaining',
    },
    {
      id: '24',
      name: 'Marketing Tools',
    },
    {
      id: '25',
      name: 'Giftables',
    },
    {
      id: '26',
      name: 'Holiday',
    },
  ],
}

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    maxWidth: 200,
    color: '#1F2D3D',
    '& .MuiTypography-body1': {
      fontSize: '.9rem',
    },
    '& .MuiTreeItem-label': {
      height: '35px',
      lineHeight: 2.5,
      backgroundColor: 'white',
    },
  },
})

export default function DataTree() {
  const classes = useStyles()

  const [expanded, setExpanded] = useState([])
  const [selected, setSelected] = useState([])

  const handleToggle = (event, nodeIds) => {
    setExpanded(nodeIds)
  }

  const handleSelect = (event, nodeIds) => {
    setSelected(nodeIds)
  }

  const renderTree = (nodes) => (
    <TreeItem key={nodes.id} nodeId={nodes.id} label={nodes.name}>
      {Array.isArray(nodes.children) ? nodes.children.map((node) => renderTree(node)) : null}
    </TreeItem>
  )

  return (
    <TreeView
      className={classes.root}
      defaultExpandIcon={<i className="fa fa-caret-right" aria-hidden="true" />}
      defaultExpanded={['1']}
      defaultCollapseIcon={<i className="fa fa-caret-down" aria-hidden="true" />}
      expanded={expanded}
      selected={selected}
      onNodeToggle={handleToggle}
      onNodeSelect={handleSelect}>
      {renderTree(productData)}
      <TreeItem nodeId="exclusive_pricing" label="Exclusive Pricing" />
      <TreeItem nodeId="circle_exclusives" label="Circle Exclusives" />
      <TreeItem nodeId="wcout_circle_tasting" label="Scout Circle Tasting" />
      <TreeItem nodeId="Wilderness_road" label="Wilderness Road" />
      <TreeItem nodeId="epic_pursuit" label="Epic Pursuit" />
      {renderTree(merchData)}
      <TreeItem key="gift_cards" nodeId="Gift Cards" label="Gift Cards" />
    </TreeView>
  )
}
