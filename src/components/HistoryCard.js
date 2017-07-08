import React, {Component} from 'react';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn,} from 'material-ui/Table';

const tableData = [
  {
    term: '2016/4/1〜',
    group: '株式会社エスキュービズム'
  },
  {
    term: '2012/4/1〜',
    group: '同志社大学経済学部経済学科'
  },
  {
    term: '2009/4/1〜',
    group: '私立須磨学園高等学校'
  },
  {
    term: '2006/4/1〜',
    group: '兵庫県西宮市立上ケ原小学校'
  },
];

export default class HistoryCard extends Component{
  state = {
    showCheckboxes: false,
  };

  render(){
    return(
      <Card>
        <CardHeader
          title="History"
          subtitle="経歴"
          actAsExpander={true}
          showExpandableButton={true}
        />
        <CardText expandable={true}>
          <Table>
            <TableHeader
              displaySelectAll={this.state.showCheckboxes}
              adjustForCheckbox={this.state.showCheckboxes}
            >
              <TableRow>
                <TableHeaderColumn>在籍期間</TableHeaderColumn>
                <TableHeaderColumn>所属</TableHeaderColumn>
              </TableRow>
            </TableHeader>
            // ToDo: データの分離
            <TableBody
              displayRowCheckbox={this.state.showCheckboxes}
            >
              {tableData.map((row, index) =>(
                <TableRow key={index}>
                  <TableRowColumn>{row.term}</TableRowColumn>
                  <TableRowColumn>{row.group}</TableRowColumn>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardText>
      </Card>
    )
  }
}
