import React from 'react';
import {
  ResourcesListWithDetail,
  ResponsivePagination,
  SectionPageHeader,
  Counter,
  Modal,
  TopicsList,
  Button,
  ShareBar,
  getResourcesStats
} from 'repills-react-components';
import { navigateTo } from 'gatsby-link';
import { sections } from 'repills-config';

import {
  HeaderContent,
  HeaderContentMain,
  HeaderContentSecondary
} from '../../style/layout-columns';

class Topic extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      openTopicsModal: false
    };
  }

  openTopicsModal = () => this.setState({ openTopicsModal: true });

  onClose = () => this.setState({ openTopicsModal: false });

  handleNavigateToSection = sectionId => {
    const section = this.props.pathContext.sections[sectionId];
    navigateTo(section.path);
  };

  // TODO: navigations for topics
  handleNavigateToTopic = topicId => alert('Navigate to topic: ' + topicId);

  backToSection = () => navigateTo('/'+this.props.pathContext.sectionId);

  render() {


    const {
      pathContext
    } = this.props;

    const {
      sectionId,
      pagination,
      topic,
      topics
    } = pathContext;

    const {
      openTopicsModal
    } = this.state;

    const section = sections.find(s => s.id === sectionId);
    // const suggestedTopics = Object.entries(sections.topics);

    return (
      <div>
        <HeaderContent style={{alignItems: 'center'}}>
          <HeaderContentMain>
            <SectionPageHeader
              color={section.color}
              icon={section.icon}
              label="Topic"
              title={topic.title}
            />
          </HeaderContentMain>
          <HeaderContentSecondary>
            <Counter
              count={pagination.totalCount}
              label="total pills"
              stats={getResourcesStats(topic.resources, true)}
            />
            <ShareBar
              link="http://repills.com"
              text="Learn pill by pill on repills.com"
              title="Pills around the web for web developers and UI designers"
              types={[
                'facebook',
                'google',
                'linkedin',
                'twitter',
                'email'
              ]}
              style={{
                marginTop: '24px',
                display: 'flex',
                justifyContent: 'center'
              }}
            />
          </HeaderContentSecondary>
        </HeaderContent>

        <div style={{textAlign: 'left'}}>
          <div>
            <Button
              label="Back to section"
              skin="ghost"
              onClick={this.backToSection}
              size="S"
            />
            <Button
              label="Switch topic"
              skin="ghost"
              onClick={this.openTopicsModal}
              size="S"
            />
          </div>
          <ResourcesListWithDetail
            resources={topic.resources.map(resource => resource.frontmatter)}
            dateType={'createdAt'}
            navigateToSection={this.handleNavigateToSection}
            navigateToTopic={this.handleNavigateToTopic}
            style={{ marginTop: '32px' }}
          />
          <ResponsivePagination
            currentPage={pagination.currentPage}
            handleNavigateToPage={page => navigateTo(`${topic.path}/${page}`)}
            itemsPerPage={pagination.perPage}
            itemsTotalCount={pagination.totalCount}
            style={{ marginTop: '32px' }}
          />
        </div>
        <Modal
          handleClose={this.onClose}
          open={openTopicsModal}
        >
          <TopicsList
            navigateTo={path => navigateTo(path)}
            topics={Object.keys(topics).map(topicId => (topics[topicId]))}
          />
        </Modal>
      </div>
    );
  }
}
export default Topic;